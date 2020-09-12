import { GetblogResponse } from './../../types/getblog-response';
import { getBlogAction, getBlogSuccessAction, getBlogFailureAction } from './../actions/getBlog.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { BlogsService } from '../../service/blogs.service';

@Injectable()
export class GetBlogEffect {

  constructor(
    private actions$: Actions,
    private blogService: BlogsService,
  ) {}

  getBlog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBlogAction),
      switchMap(({url}) => {
       return this.blogService.getBlog(url).pipe(
          map((blog: GetblogResponse) => {
            return getBlogSuccessAction({ blog });
          }),
          catchError(() => {
            return of(getBlogFailureAction());
          })
        );
      })
    )
  );
}
