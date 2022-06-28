import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '@finastra/shared';
import { EthAddressComponent } from './eth-address.component';

@NgModule({
  imports: [CommonModule, SharedModule, MatTooltipModule],
  declarations: [EthAddressComponent],
  exports: [EthAddressComponent],
})
export class EthAddressModule { }
