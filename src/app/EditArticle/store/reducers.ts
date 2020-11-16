import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from './actions/getArticle.action';
import { Action, createReducer, on } from '@ngrx/store';
import { EditArticleState } from '../types/edit-article-state';
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from './actions/updateArticle.action';

const initialState: EditArticleState = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  backendErrors: null,
};
const editArticleReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    (state): EditArticleState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateArticleSuccessAction,
    (state): EditArticleState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action): EditArticleState => ({
      ...state,
      isSubmitting: false,
      backendErrors: action.errors,
    })
  ),
  on(
    getArticleAction,
    (state): EditArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state,action): EditArticleState => ({
      ...state,
      isLoading: false,
      article:action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state): EditArticleState => ({
      ...state,
      isLoading: false
    })
  )
);
export function reducers(state: EditArticleState, action: Action) {
  return editArticleReducer(state, action);
}
