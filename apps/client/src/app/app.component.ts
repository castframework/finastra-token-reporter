import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from './constants';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'finastra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appName = 'Cast Challenge #3';
  navigationNodes = routes;

  constructor(private router: Router, public navbarService: NavbarService) {}

  nodeChosen(node: any) {
    this.router.navigate([node.path]);
  }

  brandAction() {
    this.router.navigate(['']);
  }
}
