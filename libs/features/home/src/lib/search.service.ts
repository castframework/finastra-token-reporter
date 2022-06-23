import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ReplaySubject } from 'rxjs';
import { GET_INSTRUMENT_POSITIONS } from './home.gql';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private apollo: Apollo) {}

  crystalBall(term: string) {
    let crystalBall = {
      isAddress: false,
      ledger: '',
    };
    if (term.startsWith('0x')) {
      crystalBall.isAddress = true;
      crystalBall.ledger = 'ETHEREUM';
    }
    if (term.startsWith('tz')) {
      crystalBall.isAddress = true;
      crystalBall.ledger = 'TEZOS';
    }
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
          results$.next(res.data.getInstrumentPositions);
        },
      });
    } else {
      results$.next(false);
    }
    return results$;
  }

  getInstrumentPositions(ledger: string, instrumentAddress: string) {
    return this.apollo.query<any>({
      query: GET_INSTRUMENT_POSITIONS,
      variables: {
        ledger,
        instrumentAddress,
      },
    });
  }
}
