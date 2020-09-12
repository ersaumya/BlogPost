import { AppState } from './../../../types/app-state';
import { BlogsState } from './../types/blogs-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const blogFeatureSelector = createFeatureSelector<AppState, BlogsState>(
  'blogs'
);

export const isLoadingSelector = createSelector(
  blogFeatureSelector,
  (blogState: BlogsState) => blogState.isLoading
);
export const errorSelector = createSelector(
  blogFeatureSelector,
  (blogState: BlogsState) => blogState.error
);
export const blogSelector = createSelector(
  blogFeatureSelector,
  (blogState: BlogsState) => blogState.data
);
