import { getCurrentUserAction, getCurrentUserSuccessAction, getCurrentUserFailureAction } from './../actions/getCurrentUser.action';
import { PersistanceService } from './../../../Shared/services/persistance.service';
import { CurrentUser } from './../../../Shared/types/current-user';
import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';


@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUser) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(
              getCurrentUserFailureAction()
            );
          })
        );
      })
    )
  );

 
}


