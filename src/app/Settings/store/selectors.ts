import { SettingState } from './../types/setting-state';
import { AppState } from './../../Shared/types/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const settingsFeatureSelector = createFeatureSelector<
  AppState,
  SettingState
>('settings');

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingState: SettingState) => settingState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingState: SettingState) => settingState.validationErrors
);
