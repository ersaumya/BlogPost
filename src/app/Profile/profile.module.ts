import { StoreModule } from '@ngrx/store';
import { GetProfileEffect } from './store/effects/getUserProfile.effect';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { reducers } from './store/reducers';
import { BlogsModule } from '../Shared/modules/blogs/blogs.module';
const routes: Routes = [
  {
    path: 'profiles/:slug',
    component: ProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
    RouterModule.forChild(routes),
    BlogsModule
  ],
})
export class ProfileModule {}
