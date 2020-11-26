import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './component/settings.component';
import { reducers } from './store/reducers';
import { BackendErrorMessagesModule } from '../Shared/modules/backend-error-messages/backend-error-messages.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BackendErrorMessagesModule,
    ReactiveFormsModule,
    StoreModule.forFeature('settings', reducers),
  ],
})
export class SettingsModule {}
