import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '@finastra/shared';
import { LeiComponent } from './lei.component';

@NgModule({
  imports: [CommonModule, MatTooltipModule, SharedModule],
  declarations: [LeiComponent],
  exports: [LeiComponent],
})
export class LeiModule {}
