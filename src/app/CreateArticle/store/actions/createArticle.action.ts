import { BackendErrors } from './../../../Shared/types/backend-errors';
import { ArticleInput } from './../../../Shared/types/article-input';
import { Article } from './../../../Shared/types/article';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: ArticleInput }>()
);
export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: Article }>()
);
export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{errors:BackendErrors}>()
);
