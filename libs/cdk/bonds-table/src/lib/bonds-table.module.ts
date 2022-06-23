import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BondsTableComponent } from './bonds-table.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  declarations: [
    BondsTableComponent
  ],
  exports: [
    BondsTableComponent
  ]
})
export class BondsTableModule { }
