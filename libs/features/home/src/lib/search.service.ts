import { Injectable } from '@angular/core';
import { BlockChainHelpersService } from '@finastra/shared';
import { Apollo } from 'apollo-angular';
import { ReplaySubject } from 'rxjs';
import { GET_INSTRUMENT_DETAILS_SHORT } from './home.gql';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private apollo: Apollo, private blockchainHelpers: BlockChainHelpersService) {}

  crystalBall(term: string) {
    let crystalBall = {
      isAddress: false,
      ledger: '',
    };
    crystalBall.ledger = this.blockchainHelpers.inferLedger(term);
    if (crystalBall.ledger !== '') crystalBall.isAddress = true;
    return crystalBall;
  }

  search(term: string) {
    const crystalBall = this.crystalBall(term);
    const results$ = new ReplaySubject(1);
    if (crystalBall.isAddress) {
      this.getInstrumentPositions(crystalBall.ledger, term).subscribe({
        error: (e) => {
          results$.next(false);
        },
        next: (res) => {
          console.log(res);
          results$.next(res.data.getInstrumentDetails);
        },
      });
    } else {
      results$.next(false);
    }
    return results$;
  }

  getInstrumentPositions(ledger: string, contractAddress: string) {
    return this.apollo.query<any>({
      query: GET_INSTRUMENT_DETAILS_SHORT,
      variables: {
        ledger,
        contractAddress,
      },
    });
  }
}
