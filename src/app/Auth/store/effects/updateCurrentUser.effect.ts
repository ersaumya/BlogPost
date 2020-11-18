import {
  updateCurrentUserAction,
  updateCurrentUserSuccessAction,
  updateCurrentUserFailureAction,
} from './../actions/updateCurrentUser.action';
import { CurrentUser } from './../../../Shared/types/current-user';
import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UpdateCurrentUserEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ currentUserInput }) => {
        return this.authService.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: CurrentUser) => {
            return updateCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateCurrentUserFailureAction({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    )
  );
}
