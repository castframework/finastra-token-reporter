import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Bond } from '@finastra/api-interfaces';

const COLUMNS: string[] = [
  'ledger',
  'name',
  'isinCode',
  'issuer',
  'maturityDate',
  'currency',
  'interestRateInBips',
];

@Component({
  selector: 'finastra-bonds-table',
  templateUrl: './bonds-table.component.html',
  styleUrls: ['./bonds-table.component.scss'],
})
export class BondsTableComponent implements AfterViewInit {
  dataSource: MatTableDataSource<Bond>;
  displayedColumns: string[] = COLUMNS;

  @Input() set bonds(value: Bond[]) {
    this.dataSource = new MatTableDataSource<Bond>(value);
  }
  @Output() selectedItem = new EventEmitter<any>();
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  emitItem(item: any) {
    this.selectedItem.emit(item);
  }
}
