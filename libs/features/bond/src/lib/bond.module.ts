import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'libs/shared/src';
import { BondComponent } from './bond.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':id', pathMatch: 'full', component: BondComponent }]),
    MatCardModule,
    MatDividerModule,
    SharedModule,
  ],
  declarations: [BondComponent],
})
export class BondModule {}
