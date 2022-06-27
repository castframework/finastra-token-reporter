import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'finastra-eth-address',
  templateUrl: './eth-address.component.html',
  styleUrls: ['./eth-address.component.scss'],
})
export class EthAddressComponent implements OnInit {
  @Input() address: string;
  @Input() short = true;

  constructor() {}

  ngOnInit(): void {}
}
