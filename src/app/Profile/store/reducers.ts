import {
  getUserProfileAction,
  getUserProfileSuccessAction,
  getUserProfileFailureAction,
} from './actions/getUserProfile.action';
import { createReducer, on, Action } from '@ngrx/store';
import { UserProfileState } from './../types/user-profile-state';

const initialState: UserProfileState = {
  data: null,
  isLoading: false,
  error: null,
};

const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): UserProfileState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): UserProfileState => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): UserProfileState => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: UserProfileState, action: Action) {
  return userProfileReducer(state, action);
}
