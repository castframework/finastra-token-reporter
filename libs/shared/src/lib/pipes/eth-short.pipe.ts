import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'ethShort' })
export class ETHShortPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(ethAddress: string) {
    let first4 = ethAddress.substring(0, 4);
    let last4 = ethAddress.slice(-4);
    return `${first4}...${last4}`;
  }
}
