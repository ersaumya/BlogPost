import { CreateArticleState } from './../types/create-article-state';
import { AppState } from './../../Shared/types/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const createArticleFeatureSelector =
createFeatureSelector<AppState,CreateArticleState>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleState) => createArticleState.isSubmitting
);
export const backendErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleState) =>
    createArticleState.backendErrors
);
