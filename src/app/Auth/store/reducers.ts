import { updateCurrentUserSuccessAction } from './actions/updateCurrentUser.action';
import { loginAction, loginSuccessAction, loginFailureAction } from './actions/login.action';
import { AuthState } from './../types/auth-state';
import { registerAction, registerSuccessAction, registerFailureAction } from './actions/register.action';
import { createReducer, on, Action } from '@ngrx/store';
import { getCurrentUserAction, getCurrentUserSuccessAction, getCurrentUserFailureAction } from './actions/getCurrentUser.action';


const initialState: AuthState = {
  isSubmitting: false,
  isLoading:false,
  currentUser:null,
  isLoggedIn:null,
  validationErrors:null
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    loginAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getCurrentUserAction,
    (state): AuthState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state,action):AuthState=>({
      ...state,
      currentUser:action.currentUser
    })
    )
);

export function reducers(state:AuthState,action:Action){
    return authReducer(state,action)
}
