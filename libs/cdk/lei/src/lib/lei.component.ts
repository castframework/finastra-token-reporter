import { Component, Input, OnInit } from '@angular/core';
import { LEI } from '@finastra/api-interfaces';
import { LeiService } from '@finastra/shared';
import { filter, map } from 'rxjs';

@Component({
  selector: 'finastra-lei',
  templateUrl: './lei.component.html',
  styleUrls: ['./lei.component.scss'],
})
export class LeiComponent implements OnInit {
  legalName: string;

  @Input() lei: LEI;

  constructor(private leiService: LeiService) {}

  ngOnInit(): void {
    this.leiService
      .lookup(this.lei)
      .pipe(
        filter((res) => res.length > 0),
        map((res) => res[0].Entity.LegalName.$)
      )
      .subscribe((legalName) => (this.legalName = legalName));
  }
}
