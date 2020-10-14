import { BlogsState } from './../types/blogs-state';
import { getBlogAction, getBlogFailureAction, getBlogSuccessAction } from './actions/getBlog.action';
import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState:BlogsState={
    data:null,
    isLoading:false,
    error:null
}
const blogReducer = createReducer(
  initialState,
  on(
    getBlogAction,
    (state): BlogsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getBlogSuccessAction,
    (state, action): BlogsState => ({
      ...state,
      isLoading: false,
      data: action.blog,
    })
  ),
  on(
    getBlogFailureAction,
    (state): BlogsState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction,
    ():BlogsState => initialState)
);
export function reducers(state: BlogsState, action: Action) {
  return blogReducer(state, action);
}