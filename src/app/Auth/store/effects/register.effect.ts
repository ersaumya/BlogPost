
import { CurrentUser } from './../../../Shared/types/current-user';
import { AuthService } from './../../services/auth.service';
import { registerAction, registerSuccessAction, registerFailureAction } from './../actions/register.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap,map,catchError } from 'rxjs/operators';

@Injectable()
export class RegisterEffects {
    
  constructor(private actions$: Actions, private authService: AuthService) {}
  register$=createEffect(()=>this.actions$.pipe(
    ofType(registerAction),
    switchMap(({request})=>{
      return this.authService.register(request).pipe(
        map((currentUser:CurrentUser)=>{
          return registerSuccessAction({currentUser})
        }),
        catchError(()=>{
          return of(registerFailureAction())
        })
      )
    })
  )
)
  
}