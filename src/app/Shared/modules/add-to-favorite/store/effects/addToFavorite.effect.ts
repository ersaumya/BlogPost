import { Article } from './../../../../types/article';
import {
  addToFavoritesAction,
  addToFavoritesSuccessAction,
  addToFavoritesFailureAction,
} from './../actions/add-to-favorite.action';
import { AddToFavoriteService } from './../../services/add-to-favorite.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class AddToFavoritesEffect {
  constructor(
    private actions$: Actions,
    private addToFavoriteService: AddToFavoriteService
  ) {}

  addToFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.addToFavoriteService.removeFromFavorite(slug)
          : this.addToFavoriteService.addToFavorite(slug);
        return article$.pipe(
          map((article: Article) => {
            return addToFavoritesSuccessAction({ article });
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction());
          })
        );
      })
    )
  );
}
