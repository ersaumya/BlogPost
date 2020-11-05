import { CurrentUser } from './../../Shared/types/current-user';
import { currentUserSelector } from './../../Auth/store/selectors';
import {
  articleSelector,
  isLoadingSelector,
  errorSelector,
} from './../store/selectors';
import { Subscription, Observable, combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { getArticleAction } from './../store/actions/getArticle.action';
import { select, Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/Shared/types/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit ,OnDestroy{
  slug:string;
  article:Article;
  articleSubscription:Subscription;
  isLoading$:Observable<boolean>;
  error$:Observable<string | null>;
  isAuthor$:Observable<boolean>;

  constructor(private store:Store,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.initialiseValues();
    this.initialiseListiner();
    this.fetchData();
  }

  initialiseValues():void{
    this.slug=this.route.snapshot.paramMap.get('slug');
    this.isLoading$=this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(
      map(([article,currentUser]:[Article | null,CurrentUser | null])=>{
        if(!article || !currentUser){
          return false
        }
        return currentUser.username === article.author.username
    }))
  }

  initialiseListiner():void{
    this.articleSubscription =this.store
    .pipe(select(articleSelector))
    .subscribe((article:Article | null)=>{
      this.article=article
    })
  }

  fetchData():void{
    this.store.dispatch(getArticleAction({slug:this.slug}))
  }

  ngOnDestroy():void{
    this.articleSubscription.unsubscribe();
  }
}
