import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalSearchService {
  private RECENT_SEARCHES_CACHE_KEY = 'fcs-recent-searches';
  recentSearches$ = new ReplaySubject<string[]>(1);
  recentSearchesLimit = 5;

  constructor() {
    this.updateRecentSearches();
  }

  persistTerm(term: string) {
    let recentSearches = this.getRecentSearches();
    if (recentSearches.includes(term)) return;
    if (recentSearches.length >= this.recentSearchesLimit) {
      recentSearches.pop();
    }
    recentSearches.splice(0, 0, term);
    localStorage.setItem(this.RECENT_SEARCHES_CACHE_KEY, JSON.stringify(recentSearches));
  }

  removeSearchTerm(term: string) {
    let recentSearches = this.getRecentSearches();
    recentSearches = recentSearches.filter((item: string) => item !== term);
    localStorage.setItem(this.RECENT_SEARCHES_CACHE_KEY, JSON.stringify(recentSearches));
    this.recentSearches$.next(recentSearches);
  }

  private getRecentSearches() {
    const persisted = localStorage.getItem(this.RECENT_SEARCHES_CACHE_KEY);
    return persisted ? JSON.parse(persisted) : [];
  }

  updateRecentSearches() {
    this.recentSearches$.next(this.getRecentSearches());
  }

  /* filterSearches(query: string, data: string[], searches: string[], limit = 3) {
    if (!query) {
      return data;
    }
    return data
      .filter(
        (term) =>
          term.toLowerCase().includes(query.toLowerCase()) && !searches.includes(term.toLowerCase())
      )
      .slice(0, limit);
  } */
}
