import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers } from './store/reducers';

const routes: Routes = [
  {
    path:'register',component:RegisterComponent
  }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),ReactiveFormsModule,
    StoreModule.forFeature('auth',reducers)
  ]
})
export class AuthModule { }
