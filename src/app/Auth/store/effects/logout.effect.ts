import { Router } from '@angular/router';
import { PersistanceService } from './../../../Shared/services/persistance.service';
import { tap } from 'rxjs/operators';
import { logoutAction } from './../actions/logout.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class LogoutEffect {
  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.persistanceService.set('accessToken', '');
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
}
