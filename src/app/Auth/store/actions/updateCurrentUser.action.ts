import { BackendErrors } from './../../../Shared/types/backend-errors';
import { CurrentUserInput } from './../../../Shared/types/current-user-input';
import { CurrentUser } from './../../../Shared/types/current-user';
import { ActionTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';

export const updateCurrentUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{ currentUserInput: CurrentUserInput }>()
);
export const updateCurrentUserSuccessAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUser }>()
);
export const updateCurrentUserFailureAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: BackendErrors }>()
);
