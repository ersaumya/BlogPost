import { AppState } from './../../Shared/types/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EditArticleState } from '../types/edit-article-state';

export const editArticleFeatureSelector = createFeatureSelector<
  AppState,
  EditArticleState
>('editArticle');

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleState) => editArticleState.article
);
export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleState) => editArticleState.isLoading 
);
export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleState) => editArticleState.isSubmitting
);
export const backendErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleState) => editArticleState.backendErrors
);
