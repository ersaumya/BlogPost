import { getArticleFailureAction } from './../actions/getArticle.action';
import { ArticleService as SharedArticleService } from './../../../Shared/services/article.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Article } from '../../../Shared/types/article';
import {
  getArticleAction,
  getArticleSuccessAction,
} from '../actions/getArticle.action';

@Injectable()
export class GetArticleEffect {
  constructor(
    private actions$: Actions,
    private sharedArticeService: SharedArticleService
  ) {}

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticeService.getArticle(slug).pipe(
          map((article: Article) => {
            return getArticleSuccessAction({ article });
          }),
          catchError(() => {
            return of(getArticleFailureAction());
          })
        );
      })
    )
  );
}
