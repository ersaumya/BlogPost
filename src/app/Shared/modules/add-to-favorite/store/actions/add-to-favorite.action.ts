import { Article } from './../../../../types/article';
import { ActionTypes } from './../actionTypes';
import { createAction, props} from '@ngrx/store';

export const addToFavoritesAction=createAction(
    ActionTypes.ADD_TO_FAVORITES,
    props<{isFavorited:boolean;slug:string}>()
);

export const addToFavoritesSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{ article: Article }>()
);

export const addToFavoritesFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE
);
