import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_WHOAMI } from './home.gql';
import { SearchService } from './search.service';

@Component({
  selector: 'finastra-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  searching: boolean = false;
  whoami!: string;
  query: string = '';
  results: any;

  constructor(
    private apollo: Apollo,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSearch(term: string) {
    this.searching = true;
    console.log(term);
    this.searchService.search(term).subscribe((results) => {
      this.results = results;
      this.searching = false;
    });
  }

  onResultClick(event: { query: string; results: any }) {
    console.log(event);
    this.router.navigate(['bond', event.query]);
  }

  ngAfterViewInit() {
    /* of(['ETHEREUM', 'TEZOS'])
      .pipe(
        tap(console.log),
        switchMap((ledgers) => forkJoin(ledgers.map((ledger: string) => this.getWhoami(ledger))))
      )
      .subscribe(console.log); */
  }

  getWhoami(ledger: string) {
    return this.apollo.query<any>({
      query: GET_WHOAMI,
      variables: {
        ledger,
      },
    });
  }

  ngOnDestroy() {}
}
