import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['colorstatus', 'blank', 'id',
  'created', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDatabase | null;
  data: any[] = [];
  dropDownData: any = [
    {
      "label": "Europe",
      "value": "europe"
    },
    {
      "label": "Africa",
      "value": "africa"
    },
    {
      "label": "Asia",
      "value": "asia"
    },
    {
      "label": "North America",
      "value": "northAmerica"
    },
    {
      "label": "South America",
      "value": "southAmerica"
    },
    {
      "label": "Australia",
      "value": "australia"
    },
    {
      "label": "Antarctica",
      "value": "antarctica"
    }
  ];
  isFilterEnable: boolean;
  breadCrumbItems: Array<{}>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  whichLayoutActivated: string;
  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) {
    this.isFilterEnable = false;
    this.whichLayoutActivated = 'list';
  }
  ngAfterViewInit() {
    this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          // tslint:disable-next-line:no-non-null-assertion
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Events' }, { label: 'List', active: true }];
  }
  showFilter() {
    this.isFilterEnable = !this.isFilterEnable;
  }
  changeLayout(type: string) {
    this.whichLayoutActivated = type;
  }
}
export class ExampleHttpDatabase {
  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) { }

  getRepoIssues(sort: string, order: string, page: number): Observable<any> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

    return this._httpClient.get<any>(requestUrl);
  }
}