import { PopularTagsState } from './../modules/popular-tags/types/popularTags-state';
import { BlogsState } from './../modules/blogs/types/blogs-state';
import { AuthState } from './../../Auth/types/auth-state';

export interface AppState {
    auth:AuthState
    blogs:BlogsState
    popularTags:PopularTagsState
}
