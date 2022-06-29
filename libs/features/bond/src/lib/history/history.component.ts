import { Component, Input, OnInit } from '@angular/core';
import { History } from '@finastra/api-interfaces';

const COLUMNS: string[] = [
  'notificationName',
  'date',
  'instrumentAddress',
  'transactionHash',
];

@Component({
  selector: 'bond-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  @Input() history: History;

  displayedColumns: string[] = COLUMNS;

  constructor() { }

  ngOnInit(): void {
    console.log(history);
  }
}
