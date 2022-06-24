import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ETHShortPipe } from './pipes/eth-short.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ETHShortPipe],
  exports: [ETHShortPipe],
})
export class SharedModule {}
