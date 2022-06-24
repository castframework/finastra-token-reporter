import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bond, Ledger } from '@finastra/api-interfaces';
import { Apollo } from 'apollo-angular';
import { map, Observable, switchMap, zip } from 'rxjs';
import { GET_ALL_INSTRUMENTS, GET_INSTRUMENT_DETAILS, GET_WHOAMI } from './home.gql';
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
  ) { }

  ngOnInit() { }

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
    this.getAllInstruments(Ledger.ETHEREUM).pipe(
      switchMap((ids: string[]) => {
        const bondArray$: Observable<Bond>[] = [];
        ids.forEach(id => {
          const bond$: Observable<Bond> = this.getInstrumentDetails(Ledger.ETHEREUM, id);
          bondArray$.push(bond$);
        });
        return zip(...bondArray$);
      })
    ).subscribe((data: Bond[]) => this.bonds = data);
  }

  getAllInstruments(ledger: Ledger) {
    return this.apollo
      .watchQuery<any>({
        query: GET_ALL_INSTRUMENTS,
        variables: {
          ledger: ledger,
        },
      })
      .valueChanges
      .pipe(map((result: any) => result.data.getAllInstruments));
  }

  getInstrumentDetails(ledger: Ledger, instrumentAddress: string) {
    return this.apollo
      .watchQuery<any>({
        query: GET_INSTRUMENT_DETAILS,
        variables: {
          ledger: ledger,
          contractAddress: instrumentAddress
        },
      })
      .valueChanges
      .pipe(
        map(
          (result: any) => {
            return { ...result.data.getInstrumentDetails, ...{ ledger: ledger } };
          }
        )
      );
  }

  getWhoami(ledger: string) {
    return this.apollo.query<any>({
      query: GET_WHOAMI,
      variables: {
        ledger,
      },
    });
  }

  action(item: any): void {
    console.log("action: ", item);
  }

  ngOnDestroy() { }
}
