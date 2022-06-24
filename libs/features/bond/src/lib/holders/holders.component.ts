import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bond-holders',
  templateUrl: './holders.component.html',
  styleUrls: ['./holders.component.scss'],
})
export class HoldersComponent implements OnInit {
  @Input() holders: any;

  constructor() {}

  ngOnInit(): void {}
}
