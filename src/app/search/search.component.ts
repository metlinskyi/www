import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ApiService } from '../../api/api.service';
import { SearchModel } from '../../api/models/SearchModel';

export class SearchComponent<T> {
  searchControl = new FormControl();
  searchResult: Observable<T[]>;
  searchEmpty: Observable<T[]>;
  constructor(protected api: ApiService, protected action: string) {
    this.searchEmpty = new  Observable<T[]>();
    this.searchResult = this.searchControl.valueChanges
      .pipe(
        startWith(null),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(x => {
          return this.filter(x || '');
        })
      );
  }
  filter(value: string): Observable<T[]> {
    if (value.length > 0) {
      return this.api.for<T[]>(this.action).get(value);
    }
    return this.searchEmpty;
  }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class AppSearchComponent extends SearchComponent<SearchModel> implements OnInit {
  constructor(protected api: ApiService) {
    super(api, 'search');
  }
  ngOnInit() {

  }
}