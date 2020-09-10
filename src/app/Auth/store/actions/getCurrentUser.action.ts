import { CurrentUser } from './../../../Shared/types/current-user';
import { ActionTypes } from './../actionTypes';
import { createAction,props } from '@ngrx/store';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
    ActionTypes.GET_CURRENT_USER_SUCCESS,
    props<{currentUser:CurrentUser}>()
);
export const getCurrentUserFailureAction = createAction(ActionTypes.GET_CURRENT_USER_FAILURE);