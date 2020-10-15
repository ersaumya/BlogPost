import { PopularTag } from './../../../../types/popular-tag';
import { createAction,props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagsSuccessAction = createAction(
    ActionTypes.GET_POPULAR_TAGS_SUCCESS,
    props<{popularTag:PopularTag[]}>()
    );
    
export const getPopularTagsFailureAction = createAction(ActionTypes.GET_POPULAR_TAGS_FAILURE);