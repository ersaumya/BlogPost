import { AppState } from './../../Shared/types/app-state';
import { AuthState } from './../types/auth-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const authFeatureSelector=createFeatureSelector<AppState,AuthState>('auth')

export const isSubmittingSelector=createSelector(
    authFeatureSelector,
    (authState:AuthState)=>authState.isSubmitting
)
export const validationErrorsSelector=createSelector(
    authFeatureSelector,
    (authState:AuthState)=>authState.validationErrors
)