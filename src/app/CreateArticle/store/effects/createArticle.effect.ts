import { createArticleSuccessAction, createArticleAction, createArticleFailureAction } from './../actions/createArticle.action';
import { CreateArticleService } from './../../service/create-article.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Article } from '../../../Shared/types/article';


@Injectable()
export class CreateArticleEffect {
  constructor(
    private actions$: Actions,
    private createArticeService:CreateArticleService,
    private router: Router
  ) {}

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticeService.createArticle(articleInput).pipe(
          map((article: Article) => {
            return createArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({article}) => {
          this.router.navigate(['/articles',article.slug]);
        })
      ),
    { dispatch: false }
  );
}
