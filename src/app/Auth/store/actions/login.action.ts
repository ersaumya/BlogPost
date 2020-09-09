import { BackendErrors } from './../../../Shared/types/backend-errors';
import { CurrentUser } from './../../../Shared/types/current-user';
import { LoginRequest } from './../../types/login-request';
import { ActionTypes } from './../actionTypes';
import { createAction, props} from '@ngrx/store';

export const loginAction=createAction(
    ActionTypes.LOGIN,
    props<{request:LoginRequest}>()
);

export const loginSuccessAction=createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{currentUser:CurrentUser}>()
)

export const loginFailureAction=createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{errors:BackendErrors}>()
);
