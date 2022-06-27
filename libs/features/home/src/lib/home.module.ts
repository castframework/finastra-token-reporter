import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { BondsTableModule } from '@finastra/cdk/bonds-table';
import { GlobalSearchModule } from '@finastra/cdk/global-search';
import { LoaderModule } from 'libs/cdk/loader/src';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: HomeComponent }]),
    GlobalSearchModule,
    BondsTableModule,
    MatCardModule,
    LoaderModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
