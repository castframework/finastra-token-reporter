import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '@finastra/api-interfaces';

const COLUMNS: string[] = [
  'transactionId',
  'buyer',
  'seller',
  'settlementDate',
  'quantity',
  'fiatValue',
  'settlementStatus',
];

@Component({
  selector: 'bond-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  displayedColumns: string[] = COLUMNS;

  @Input() transactions: Transaction[];

  constructor() {}

  ngOnInit(): void {}
}
