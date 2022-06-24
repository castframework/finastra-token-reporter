import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { SkeletonTextModule } from '@finastra/angular-components/skeleton-text';
import { SharedModule } from 'libs/shared/src';
import { BondComponent } from './bond.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HoldersComponent } from './holders/holders.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':id', pathMatch: 'full', component: BondComponent }]),
    MatCardModule,
    MatDividerModule,
    SharedModule,
    MatTabsModule,
    SkeletonTextModule,
  ],
  declarations: [BondComponent, TransactionsComponent, HoldersComponent, HistoryComponent],
})
export class BondModule {}
