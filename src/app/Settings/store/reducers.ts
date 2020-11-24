import { updateCurrentUserAction, updateCurrentUserSuccessAction, updateCurrentUserFailureAction } from './../../Auth/store/actions/updateCurrentUser.action';
import { Action, createReducer,on } from '@ngrx/store';
import { SettingState } from './../types/setting-state';

const initialState: SettingState = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsReducers = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): SettingState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): SettingState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state,action): SettingState => ({
      ...state,
      isSubmitting: false,
      validationErrors:action.errors
    })
  )
);
export function reducers(state: SettingState, action: Action) {
  return settingsReducers(state, action);
}