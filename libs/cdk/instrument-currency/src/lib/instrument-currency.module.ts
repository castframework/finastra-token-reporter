import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkeletonTextModule } from '@finastra/angular-components/skeleton-text';
import { InstrumentCurrencyComponent } from './instrument-currency.component';

@NgModule({
  imports: [CommonModule, SkeletonTextModule],
  declarations: [InstrumentCurrencyComponent],
  exports: [InstrumentCurrencyComponent],
})
export class InstrumentCurrencyModule {}
