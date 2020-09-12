import { GetblogResponse } from './../../types/getblog-response';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
export const getBlogAction=createAction(
    ActionTypes.GET_BLOG,
    props<{url:string}>()
)
export const getBlogSuccessAction = createAction(
  ActionTypes.GET_BLOG_SUCCESS,
  props<{ blog: GetblogResponse }>() 
)
export const getBlogFailureAction = createAction(
  ActionTypes.GET_BLOG_FAILURE
)