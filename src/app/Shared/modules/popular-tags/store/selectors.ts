import { PopularTagsState } from './../types/popularTags-state';
import { AppState } from './../../../types/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const popularTagsFeatureSelector = 
createFeatureSelector<AppState, PopularTagsState>('popularTags');

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsState) => popularTagsState.data
);
export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsState) => popularTagsState.isLoading
);
export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsState) => popularTagsState.error
);

