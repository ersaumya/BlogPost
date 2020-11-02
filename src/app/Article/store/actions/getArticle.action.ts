import { Article } from './../../../Shared/types/article';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);
export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: Article }>()
);
export const getArticleFailureAction = createAction(ActionTypes.GET_ARTICLE_FAILURE);
