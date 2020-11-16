import { updateArticleSuccessAction, updateArticleAction, updateArticleFailureAction } from './../actions/updateArticle.action';
import { EditArticleService } from './../../service/edit-article.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Article } from '../../../Shared/types/article';

@Injectable()
export class UpdateArticleEffect {
  constructor(
    private actions$: Actions,
    private editArticeService: EditArticleService,
    private router: Router
  ) {}

  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ slug,articleInput }) => {
        return this.editArticeService.updateArticle(slug,articleInput).pipe(
          map((article: Article) => {
            return updateArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    { dispatch: false }
  );
}
