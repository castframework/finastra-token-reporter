import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from '@apollo/client/utilities';
import { NavbarService } from '@finastra/shared';
import { Apollo } from 'apollo-angular';
import { map, switchMap, take, tap } from 'rxjs';
import { GET_INSTRUMENT_DETAILS } from './bond.gql';

@Component({
  selector: 'finastra-bond',
  templateUrl: './bond.component.html',
  styleUrls: ['./bond.component.scss'],
})
export class BondComponent implements OnInit {
  instrumentAddress: string;
  instrumentDetails$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo,
    private navbarService: NavbarService
  ) {
    this.navbarService.setTitle('Bond');
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.instrumentAddress = params['id'];
    });
    let ledger = 'ETHEREUM';
    this.instrumentDetails$ = this.route.params.pipe(
      map((params) => params.id),
      switchMap((instrumentAddress) => this.getInstrumentPositions(ledger, instrumentAddress)),
      map((apolloResult) => ({ ...apolloResult.data.getInstrumentDetails, ...{ ledger: ledger } })),
      tap((instrumentDetails) => this.navbarService.setTitle(`Bond ${instrumentDetails.name}`)),
      tap(console.log),
      take(1)
    ) as any;
  }

  getInstrumentPositions(ledger: string, contractAddress: string) {
    return this.apollo.query<any>({
      query: GET_INSTRUMENT_DETAILS,
      variables: {
        ledger,
        contractAddress,
      },
    });
  }
}
