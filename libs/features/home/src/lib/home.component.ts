import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bond, Ledger } from '@finastra/api-interfaces';
import { Apollo } from 'apollo-angular';
import { forkJoin, map, of, switchMap } from 'rxjs';
import { GET_ALL_INSTRUMENTS, GET_INSTRUMENT_DETAILS } from './home.gql';
import { SearchService } from './search.service';

@Component({
  selector: 'finastra-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  loading: boolean = true;
  searching: boolean = false;
  whoami!: string;
  query: string = '';
  results: any;
  bonds?: Bond[];

  constructor(
    private apollo: Apollo,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSearch(term: string) {
    this.searching = true;
    this.searchService.search(term).subscribe((results) => {
      this.results = results;
      this.searching = false;
    });
  }

  onResultClick(event: { query: string; results: any }) {
    this.router.navigate(['bond', event.query]);
  }

  ngAfterViewInit() {
    this.getAllInstruments(Ledger.ETHEREUM)
      .pipe(
        switchMap((ids: string[]) =>
          ids.length > 0
            ? forkJoin([...ids.map((id) => this.getInstrumentDetails(Ledger.ETHEREUM, id))])
            : of([])
        )
      )
      .subscribe((data: Bond[]) => (this.bonds = data));
  }

  getAllInstruments(ledger: Ledger) {
    return this.apollo
      .query<any>({
        query: GET_ALL_INSTRUMENTS,
        variables: {
          ledger: ledger,
        },
      })
      .pipe(map((result: any) => result.data.getAllInstruments));
  }

  getInstrumentDetails(ledger: Ledger, instrumentAddress: string) {
    return this.apollo
      .query<any>({
        query: GET_INSTRUMENT_DETAILS,
        variables: {
          ledger: ledger,
          contractAddress: instrumentAddress,
        },
      })
      .pipe(map((result: any) => ({ ...result.data.getInstrumentDetails, ...{ ledger: ledger } })));
  }

  action(contractAdress: string) {
    this.router.navigate(['bond', contractAdress]);
  }

  ngOnDestroy() {}
}
