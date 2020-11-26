import { LogoutEffect } from './store/effects/logout.effect';
import { UpdateCurrentUserEffect } from './store/effects/updateCurrentUser.effect';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';
import { LoginEffect } from './store/effects/login.effect';
import { BackendErrorMessagesModule } from 'src/app/Shared/modules/backend-error-messages/backend-error-messages.module';
import { RegisterEffect } from './store/effects/register.effect';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      LogoutEffect,
      GetCurrentUserEffect,
      UpdateCurrentUserEffect
    ]),
    BackendErrorMessagesModule,
  ],
})
export class AuthModule {}
