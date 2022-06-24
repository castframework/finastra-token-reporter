import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'libs/shared/src';
import { BondsTableComponent } from './bonds-table.component';

@NgModule({
  imports: [CommonModule, MatSortModule, MatTableModule, MatIconModule, SharedModule],
  declarations: [BondsTableComponent],
  exports: [BondsTableComponent],
})
export class BondsTableModule {}