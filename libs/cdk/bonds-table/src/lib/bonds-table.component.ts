import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Bond } from "@finastra/api-interfaces";

@Component({
  selector: 'finastra-bonds-table',
  templateUrl: './bonds-table.component.html',
  styleUrls: ['./bonds-table.component.scss']
})
export class BondsTableComponent implements OnInit {

  dataSource: any;

  @Input() bonds?: Bond[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = changes.bonds.currentValue;
  }

  displayedColumns: string[] = ['name', 'isinCode', 'issuer', 'maturityDate', 'interestRateInBips'];
  //columnsToDisplay: string[] = this.displayedColumns.slice();
  //data: PeriodicElement[] = ELEMENT_DATA;
}
