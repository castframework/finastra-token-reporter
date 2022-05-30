import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { GET_WHOAMI } from './home.gql';

@Component({
  selector: 'finastra-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  whoami!: string;

  private querySubscription!: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_WHOAMI,
        variables: {
          ledger: 'ETHEREUM',
        },
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.whoami = data.whoami;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
