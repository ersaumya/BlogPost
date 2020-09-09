import { LoginRequest } from './../../types/login-request';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BackendErrors } from 'src/app/Shared/types/backend-errors';
import { Store, select } from '@ngrx/store';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrors | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initialiseForm();
    this.initialiseValues();
  }

  initialiseValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initialiseForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const request: LoginRequest = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
  
}
