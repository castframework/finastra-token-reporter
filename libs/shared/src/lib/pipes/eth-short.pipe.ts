import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ethShort' })
export class ETHShortPipe implements PipeTransform {
  constructor() { }
  transform(ethAddress: string) {
    return `${ethAddress.substring(0, 10)}...`;
  }
}
