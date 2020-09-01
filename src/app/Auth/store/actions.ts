import { RegisterRequest } from './../types/register-request';
import { ActionTypes } from './actionTypes';
import { createAction, props } from '@ngrx/store';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequest }>()
);
