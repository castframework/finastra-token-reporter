import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@finastra/shared';
import { EthAddressComponent } from './eth-address.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [EthAddressComponent],
  exports: [EthAddressComponent],
})
export class EthAddressModule {}
