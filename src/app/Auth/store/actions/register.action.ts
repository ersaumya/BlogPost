import { BackendErrors } from './../../../Shared/types/backend-errors';
import { CurrentUser } from './../../../Shared/types/current-user';
import { RegisterRequest } from './../../types/register-request';
import { ActionTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequest }>()
);

export const registerSuccessAction=createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{currentUser:CurrentUser}>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,props<{errors:BackendErrors}>()
  );
