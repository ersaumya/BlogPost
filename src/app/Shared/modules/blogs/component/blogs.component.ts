import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from './../../../../../environments/environment';
import { blogSelector, errorSelector, isLoadingSelector } from './../store/selectors';
import { GetblogResponse } from './../types/getblog-response';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { getBlogAction } from '../store/actions/getBlog.action';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit, OnDestroy {
  @Input() apiUrl: string;

  blog$: Observable<GetblogResponse | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;
  limit = environment.limit;
  baseUrl: string;
  queryParamsSubscription: Subscription;
  currentPage:number;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListiners();
    this.fetchData();
  }

  initializeListiners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        //console.log('params', params);
        this.currentPage=Number(params.page || '1')
        //console.log('current page',this.currentPage);
      }
    );
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.blog$ = this.store.pipe(select(blogSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  fetchData(): void {
    this.store.dispatch(getBlogAction({ url: this.apiUrl }));
  }
}
