import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { BondComponent } from './bond.component';
import { ETHShortPipe } from './eth-short.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':id', pathMatch: 'full', component: BondComponent }]),
    MatCardModule,
    MatDividerModule,
  ],
  declarations: [BondComponent, ETHShortPipe],
})
export class BondModule {}
