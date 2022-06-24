import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bond-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  @Input() history: any;

  constructor() {}

  ngOnInit(): void {}
}
