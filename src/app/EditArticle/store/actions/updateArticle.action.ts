import { BackendErrors } from './../../../Shared/types/backend-errors';
import { ArticleInput } from './../../../Shared/types/article-input';
import { Article } from '../../../Shared/types/article';
import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ slug: string; articleInput:ArticleInput }>()
);
export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: Article }>()
);

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrors}>()
);
