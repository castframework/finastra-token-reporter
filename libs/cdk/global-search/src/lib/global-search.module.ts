import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GlobalSearchComponent } from './global-search.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    OverlayModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDividerModule,
    A11yModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  declarations: [GlobalSearchComponent],
  exports: [GlobalSearchComponent],
})
export class GlobalSearchModule {}
