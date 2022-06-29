import { Component, Input, OnInit } from '@angular/core';
import { Observable } from '@apollo/client/utilities';
import { ETH_Address, Ledger } from '@finastra/api-interfaces';
import { Apollo } from 'apollo-angular';
import { filter, map } from 'rxjs';
import { GET_CURRENCY_FROM_TXS } from './instrument-currency.gql';

@Component({
  selector: 'finastra-instrument-currency',
  templateUrl: './instrument-currency.component.html',
  styleUrls: ['./instrument-currency.component.scss'],
})
export class InstrumentCurrencyComponent implements OnInit {
  currency$: Observable<any>;

  @Input() instrumentAddress: ETH_Address;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.currency$ = this.getCurrencyFromTxs(Ledger.ETHEREUM, this.instrumentAddress);
  }

  getCurrencyFromTxs(ledger: string, instrumentAddress: string) {
    return this.apollo
      .query<any>({
        query: GET_CURRENCY_FROM_TXS,
        variables: {
          ledger,
          instrumentAddress,
        },
      })
      .pipe(
        map((apolloResult) => apolloResult.data.getSettlementTransactions),
        filter((txs) => txs.length > 0),
        map((txs) => txs[0].paymentCurrency)
      ) as any;
  }
}
