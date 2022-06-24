import { Injectable } from '@angular/core';
import { NavigationNode } from '@finastra/angular-components/global-nav';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  currentNode$ = new ReplaySubject<NavigationNode>(1);

  constructor() {}

  setTitle(title: string) {
    this.currentNode$.next({ title });
  }
}
