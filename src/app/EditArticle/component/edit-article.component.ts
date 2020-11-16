import { updateArticleAction } from './../store/actions/updateArticle.action';
import { ActivatedRoute } from '@angular/router';
import { getArticleAction } from './../store/actions/getArticle.action';
import { validationErrorsSelector } from './../../Auth/store/selectors';
import { isLoadingSelector, isSubmittingSelector, articleSelector } from './../store/selectors';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ArticleInput } from '../../Shared/types/article-input';
import { filter, map } from 'rxjs/operators';
import { BackendErrors } from '../../Shared/types/backend-errors';
import { Article } from '../../Shared/types/article';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInput>;
  isLoading$: Observable<boolean>;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrors | null>;
  slug: string;
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initialValues();
    this.fetchData();
  }
  initialValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$=this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article:Article)=>{
        return {
          title:article.title,
          description:article.description,
          body:article.body,
          tagList:article.tagList
        }
      })
      )
  }
  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  onSubmit(articleInput:ArticleInput):void{
    this.store.dispatch(updateArticleAction({slug:this.slug,articleInput}))
  }
}
