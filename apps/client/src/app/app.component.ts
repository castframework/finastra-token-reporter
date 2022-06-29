import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '@finastra/shared';
import { routes } from './constants';

const darkThemeLSName = 'darkTheme';

@Component({
  selector: 'finastra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appName = 'Cast Challenge #3';
  navigationNodes = routes;
  public theme = 'light';
  public dark = false;

  constructor(
    private router: Router,
    public navbarService: NavbarService,
    @Inject(DOCUMENT) private document: Document,
    private _overlayContainer: OverlayContainer,
    private renderer: Renderer2
  ) { }

  public ngOnInit(): void {
    this.dark = this.getDarkThemeValue();
    this.setTheme(this.dark);
  }

  nodeChosen(node: any) {
    this.router.navigate([node.path]);
  }

  brandAction() {
    this.router.navigate(['']);
  }

  private getDarkThemeValue(): boolean {
    return localStorage.getItem(darkThemeLSName) === 'true';
    //return this.localStorageService.getItem(darkThemeLSName) ;
  }

  public toggleTheme(): void {
    const darkTheme = this.getDarkThemeValue();
    this.dark = !darkTheme;
    console.log(this.dark)

    localStorage.setItem(darkThemeLSName, this.dark.toString());

    this.setTheme(this.dark);
  }

  private setTheme(dark: boolean): void {
    const darkThemeClass = 'uxg-dark-theme';
    const fdsDark = 'fds-dark';
    this.theme = dark ? 'dark' : 'light';

    if (dark) {
      this.renderer.addClass(this.document.body, darkThemeClass);
      this.renderer.addClass(this.document.body, fdsDark);
      this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
    } else {
      this.renderer.removeClass(this.document.body, darkThemeClass);
      this.renderer.removeClass(this.document.body, fdsDark);
      this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
    }
  }
}
