import { UserProfileState } from './../types/user-profile-state';
import { AppState } from './../../Shared/types/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const userProfileFeatureSelector = createFeatureSelector<
  AppState,
  UserProfileState
>('userProfile');

export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileState) => userProfileState.data
);

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileState) => userProfileState.isLoading
);

export const errorSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileState) => userProfileState.error
);
