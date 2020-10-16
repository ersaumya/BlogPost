import { PopularTag } from './../../../../types/popular-tag';
import { getPopularTagsAction, getPopularTagsSuccessAction, getPopularTagsFailureAction } from './../actions/getPopularTags.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError,} from 'rxjs/operators';
import { PopularTagsService } from '../../service/popular-tags.service';

@Injectable()
export class GetPopularTagsEffect {
  constructor(
    private actions$: Actions,
    private popularTagService: PopularTagsService
  ) {}

  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagService.getPopularTags().pipe(
          map((popularTags: PopularTag[]) => {
            return getPopularTagsSuccessAction({popularTags});
          }),
          catchError(() => {
            return of(getPopularTagsFailureAction());
          })
        );
      })
    )
  );
}
