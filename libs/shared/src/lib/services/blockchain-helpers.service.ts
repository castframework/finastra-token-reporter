import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlockChainHelpersService {
  constructor() {}

  inferLedger(address: string) {
    if (address.startsWith('0x')) {
      return 'ETHEREUM';
    }
    if (address.startsWith('tz')) {
      return 'TEZOS';
    }
    return '';
  }
}
