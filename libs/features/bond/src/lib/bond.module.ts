import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { SkeletonTextModule } from '@finastra/angular-components/skeleton-text';
import { EthAddressModule } from 'libs/cdk/eth-address/src';
import { LoaderModule } from 'libs/cdk/loader/src';
import { SharedModule } from 'libs/shared/src';
import { BondComponent } from './bond.component';
import { HistoryComponent } from './history/history.component';
import { HoldersComponent } from './holders/holders.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':id', pathMatch: 'full', component: BondComponent }]),
    MatCardModule,
    MatDividerModule,
    SharedModule,
    MatTabsModule,
    SkeletonTextModule,
    MatTooltipModule,
    MatTableModule,
    EthAddressModule,
    MatProgressBarModule,
    LoaderModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [BondComponent, TransactionsComponent, HoldersComponent, HistoryComponent],
})
export class BondModule {}
