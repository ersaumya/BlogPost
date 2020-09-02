import { createReducer, on, Action } from '@ngrx/store';

import { registerAction } from './actions';
import { AuthState } from '../types/auth-state';

const initialState: AuthState = {
  isSubmitting: false
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function reducers(state:AuthState,action:Action){
    return authReducer(state,action)
}
