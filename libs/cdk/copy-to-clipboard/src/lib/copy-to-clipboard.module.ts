import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CopyToClipboardComponent } from './copy-to-clipboard.component';
import { CopyToClipboardDirective } from './copy-to-clipboard.directive';

@NgModule({
  imports: [MatTooltipModule, MatIconModule, MatButtonModule, CommonModule],
  declarations: [CopyToClipboardComponent, CopyToClipboardDirective],
  exports: [CopyToClipboardComponent, CopyToClipboardDirective],
})
export class CopyToClipboardModule {}
