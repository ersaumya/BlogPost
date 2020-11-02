import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import { ArticleState } from '../types/article-state';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from './actions/getArticle.action';

const initialState: ArticleState = {
  data: null,
  isLoading: false,
  error: null,
};
const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleState => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): ArticleState => initialState)
);
export function reducers(state: ArticleState, action: Action) {
  return articleReducer(state, action);
}
