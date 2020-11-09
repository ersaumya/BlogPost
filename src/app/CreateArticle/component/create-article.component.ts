import { createArticleAction } from './../store/actions/createArticle.action';
import { isSubmittingSelector, backendErrorsSelector } from './../store/selectors';

import { Store, select } from '@ngrx/store';
import { BackendErrors } from './../../Shared/types/backend-errors';
import { Observable } from 'rxjs';
import { ArticleInput } from './../../Shared/types/article-input';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInput = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrors | null>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$=this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(backendErrorsSelector));
  }

  onSubmit(articleInput: ArticleInput): void {
    this.store.dispatch(createArticleAction({articleInput}))
  }
}
