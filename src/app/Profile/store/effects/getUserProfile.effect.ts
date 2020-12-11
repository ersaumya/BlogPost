import { UserProfile } from './../../types/user-profile';
import {
  getUserProfileAction,
  getUserProfileSuccessAction,
  getUserProfileFailureAction,
} from './../actions/getUserProfile.action';
import { ProfileService } from './../../services/profile.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class GetProfileEffect {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}

  getProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ slug }) => {
        return this.profileService.getUserProfile(slug).pipe(
          map((userProfile: UserProfile) => {
            return getUserProfileSuccessAction({ userProfile });
          }),
          catchError(() => {
            return of(getUserProfileFailureAction());
          })
        );
      })
    )
  );
}
