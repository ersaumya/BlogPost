import { blogSelector, errorSelector, isLoadingSelector } from './../store/selectors';
import { GetblogResponse } from './../types/getblog-response';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { getBlogAction } from '../store/actions/getBlog.action';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {

  @Input() apiUrl: string;

  blog$:Observable<GetblogResponse | null>
  error$:Observable<string | null>
  isLoading$:Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
    
  }

  initializeValues():void{
    this.blog$=this.store.pipe(select(blogSelector))
    this.error$=this.store.pipe(select(errorSelector))
    this.isLoading$=this.store.pipe(select(isLoadingSelector))
  }

  fetchData():void{
    this.store.dispatch(getBlogAction({ url: this.apiUrl }));
  }
}
