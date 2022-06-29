import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LeiComponent } from './lei.component';

@NgModule({
  imports: [CommonModule, MatTooltipModule],
  declarations: [LeiComponent],
  exports: [LeiComponent],
})
export class LeiModule {}
