import { logoutAction } from './../../Auth/store/actions/logout.action';
import { updateCurrentUserAction } from './../../Auth/store/actions/updateCurrentUser.action';
import { CurrentUserInput } from './../../Shared/types/current-user-input';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from './../store/selectors';
import { filter } from 'rxjs/operators';
import { currentUserSelector } from './../../Auth/store/selectors';
import { CurrentUser } from './../../Shared/types/current-user';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendErrors } from 'src/app/Shared/types/backend-errors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  settingForm: FormGroup;
  currentUserSubscribtion: Subscription;
  currentUser: CurrentUser;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrors | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.currentUserSubscribtion = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUser) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.settingForm = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    });
  }

  submit() {
    const currentUserInput: CurrentUserInput = {
      ...this.currentUser,
      ...this.settingForm.value,
    };
    this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
  }

  logout() {
    this.store.dispatch(logoutAction());
  }

  ngOnDestroy(): void {
    this.currentUserSubscribtion.unsubscribe();
  }
}
