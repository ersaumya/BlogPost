import { AppState } from './../../Shared/types/app-state';
import { ArticleState } from './../types/article-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const articleFeatureSelector = createFeatureSelector<AppState, ArticleState>(
  'article'
);

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleState) => articleState.isLoading
);
export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleState) => articleState.error
);
export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleState) => articleState.data
);
