import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { distinctUntilChanged, ReplaySubject } from 'rxjs';
import { GlobalSearchService } from './global-search.service';

@Component({
  selector: 'finastra-global-search',
  templateUrl: './global-search.component.html',
})
export class GlobalSearchComponent implements OnInit, AfterViewInit {
  @Input() query: string;
  @Input() placeholder: string;
  @Input() resultsCount: number;

  showPanel = false;
  term$ = new ReplaySubject<string>(1);

  @Output() search = new EventEmitter<string>();

  @ViewChild('searchPanel') searchPanel: TemplateRef<any>;
  @ViewChild('finastraGlobalSearch') searchContainer: ElementRef;

  searchPanelOverlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    public searchService: GlobalSearchService
  ) {}

  ngOnInit(): void {
    this.term$.pipe(distinctUntilChanged()).subscribe((query) => {
      this.searchService.persistTerm(query);
      this.search.emit(query);
    });
  }

  ngAfterViewInit(): void {
    /* this.searchService.recentSearches$.subscribe((recentSearches: string[]) => {
      this.ffdcSearches.RECENT_SEARCHES.searches = this.searchService._filterSearches(this.query, recentSearches, []);
    }), */
  }

  displaySearchPanel() {
    this.showPanel = true;
    const host = this.searchContainer.nativeElement;
    const config = new OverlayConfig({
      hasBackdrop: true,
      panelClass: 'global-search-overlay',
      width: host.getBoundingClientRect().width,
    });

    config.positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(host)
      .withPositions([
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top',
        },
      ]);

    this.searchPanelOverlayRef = this.overlay.create(config);
    this.searchPanelOverlayRef.attach(new TemplatePortal(this.searchPanel, this.viewContainerRef));
    this.searchPanelOverlayRef.backdropClick().subscribe(() => {
      this.closeOverlay();
    });
  }

  closeOverlay() {
    if (this.searchPanelOverlayRef) {
      this.searchPanelOverlayRef.dispose();
    }
    this.showPanel = false;
    this.searchService.updateRecentSearches();
  }

  onSelect(term: any, filterKey?: string) {
    this.term$.next(term);
    this.closeOverlay();
  }

  onEsc() {
    this.clearInput();
    this.closeOverlay();
  }

  clearInput() {
    this.term$.next('');
  }

  onRemoveTerm(term: any) {
    this.searchService.removeSearchTerm(term);
  }
}
