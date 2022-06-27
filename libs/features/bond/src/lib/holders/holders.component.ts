import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Holder } from '@finastra/api-interfaces';

const COLUMNS: string[] = ['rank', 'instrumentAddress', 'balance', 'holdingPercentage', 'holding'];

@Component({
  selector: 'bond-holders',
  templateUrl: './holders.component.html',
  styleUrls: ['./holders.component.scss'],
})
export class HoldersComponent implements OnInit {
  dataSource: MatTableDataSource<Holder>;
  displayedColumns: string[] = COLUMNS;

  @Input() set holders(value: Holder[]) {
    if (value) {
      const holders = value
        .slice()
        .sort((a, b) => b.balance - a.balance)
        .map((holder, index) => ({ ...holder, rank: index + 1 })) as unknown as Holder[];
      this.dataSource = new MatTableDataSource(holders);
    }
  }
  @Input() initialSupply: number;

  constructor() {}

  ngOnInit(): void {}
}
