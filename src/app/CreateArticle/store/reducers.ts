import { createArticleAction, createArticleSuccessAction, createArticleFailureAction } from './actions/createArticle.action';
import { CreateArticleState } from './../types/create-article-state';
import { Action, createReducer, on } from '@ngrx/store';

const initialState: CreateArticleState = {
  isSubmitting:false,
  backendErrors:null
};
const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): CreateArticleState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    createArticleSuccessAction,
    (state): CreateArticleState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    createArticleFailureAction,
    (state,action): CreateArticleState => ({
      ...state,
      isSubmitting: false,
      backendErrors:action.errors
    })
  )
);
export function reducers(state: CreateArticleState, action: Action) {
  return createArticleReducer(state, action);
}
