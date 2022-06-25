import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from '@apollo/client/utilities';
import { BlockChainHelpersService, EventsService, NavbarService } from '@finastra/shared';
import { Apollo } from 'apollo-angular';
import { map, switchMap, take, tap } from 'rxjs';
import {
  GET_INSTRUMENT_DETAILS,
  GET_INSTRUMENT_POSITIONS,
  GET_SETTLEMENT_TRANSACTIONS,
} from './bond.gql';

@Component({
  selector: 'finastra-bond',
  templateUrl: './bond.component.html',
  styleUrls: ['./bond.component.scss'],
})
export class BondComponent implements OnInit {
  instrumentAddress: string;
  ledger: string;
  instrumentDetails$: Observable<any>;
  transactions$: Observable<any>;
  positions$: Observable<any>;
  events$: Observable<any>;
  firstLoad = true;

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo,
    private navbarService: NavbarService,
    private blockchainHelpers: BlockChainHelpersService,
    private eventsService: EventsService
  ) {
    this.navbarService.setTitle('Bond');
  }

  ngOnInit(): void {
    this.instrumentDetails$ = this.route.params.pipe(
      map((params) => params.id),
      tap((instrumentAddress) => (this.instrumentAddress = instrumentAddress)),
      tap(
        (instrumentAddress) => (this.ledger = this.blockchainHelpers.inferLedger(instrumentAddress))
      ),
      tap(() =>
        this.firstLoad ? this.onTabChanged({ index: TABS.TRANSACTIONS }) : (this.firstLoad = false)
      ),
      switchMap((instrumentAddress) => this.getInstrumentPositions(this.ledger, instrumentAddress)),
      tap((instrumentDetails) => this.navbarService.setTitle(`Bond ${instrumentDetails.name}`)),
      tap(console.log),
      take(1)
    ) as any;
  }

  getInstrumentPositions(ledger: string, contractAddress: string) {
    return this.apollo
      .query<any>({
        query: GET_INSTRUMENT_DETAILS,
        variables: {
          ledger,
          contractAddress,
        },
      })
      .pipe(
        map((apolloResult) => ({
          ...apolloResult.data.getInstrumentDetails,
          ...{ ledger: this.ledger },
        }))
      );
  }

  onTabChanged($event: { index: number }) {
    switch ($event.index) {
      case TABS.TRANSACTIONS:
        this.transactions$ = this.getTransactions(this.ledger, this.instrumentAddress).pipe(
          tap(console.log),
          take(1)
        );
        break;
      case TABS.HOLDERS:
        this.positions$ = this.getPositions(this.ledger, this.instrumentAddress).pipe(
          tap(console.log),
          take(1)
        );
        break;
      case TABS.INSTRUMENTS_HISTORY:
        this.events$ = this.getHistory(this.instrumentAddress).pipe(tap(console.log), take(1));
        break;
    }
  }

  getTransactions(ledger: string, instrumentAddress: string) {
    return this.apollo
      .query<any>({
        query: GET_SETTLEMENT_TRANSACTIONS,
        variables: {
          ledger,
          instrumentAddress,
        },
      })
      .pipe(map((apolloResult) => apolloResult.data.getSettlementTransactions)) as any;
  }

  getPositions(ledger: string, instrumentAddress: string) {
    return this.apollo
      .query<any>({
        query: GET_INSTRUMENT_POSITIONS,
        variables: {
          ledger,
          instrumentAddress,
        },
      })
      .pipe(map((apolloResult) => apolloResult.data.getInstrumentPositions)) as any;
  }

  getHistory(instrumentAddress: string) {
    return this.eventsService.get(instrumentAddress) as any;
  }
}

export enum TABS {
  TRANSACTIONS,
  HOLDERS,
  INSTRUMENTS_HISTORY,
}
