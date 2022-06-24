import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bond-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  @Input() transactions: any;

  constructor() {}

  ngOnInit(): void {}
}
