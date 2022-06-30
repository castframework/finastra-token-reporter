import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ethShort' })
export class ETHShortPipe implements PipeTransform {
  constructor() {}

  transform(ethAddress: string, limit = 10) {
    return ethAddress.length > limit ? `${ethAddress.substring(0, limit)}...` : ethAddress;
  }
}
