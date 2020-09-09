import { PersistanceService } from './../../../Shared/services/persistance.service';

import { CurrentUser } from './../../../Shared/types/current-user';
import { AuthService } from './../../services/auth.service';
import { registerAction, registerSuccessAction, registerFailureAction } from './../actions/register.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap,map,catchError,tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffect {
    
  constructor(
     private actions$: Actions,
     private authService: AuthService,
     private persistanceService:PersistanceService,
     private router:Router) {}

  register$=createEffect(()=>this.actions$.pipe(
    ofType(registerAction),
    switchMap(({request})=>{
      return this.authService.register(request).pipe(
        map((currentUser:CurrentUser)=>{
          this.persistanceService.set('accessToken',currentUser.token)
          return registerSuccessAction({currentUser})
        }),
        catchError((errorResponse:HttpErrorResponse)=>{
          return of(registerFailureAction({errors:errorResponse.error.errors}))
        })
       )
     })
   )
 )

 redirectAfterSubmit$=createEffect(
   ()=>this.actions$.pipe(
     ofType(registerSuccessAction),
     tap(()=>{
       this.router.navigateByUrl('/')
     })
   ),
   {dispatch:false}
 )
}