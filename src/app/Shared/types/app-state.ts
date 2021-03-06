import { UserProfileState } from './../../Profile/types/user-profile-state';
import { SettingState } from './../../Settings/types/setting-state';
import { EditArticleState } from './../../EditArticle/types/edit-article-state';
import { CreateArticleState } from './../../CreateArticle/types/create-article-state';
import { ArticleState } from './../../Article/types/article-state';
import { PopularTagsState } from './../modules/popular-tags/types/popularTags-state';
import { BlogsState } from './../modules/blogs/types/blogs-state';
import { AuthState } from './../../Auth/types/auth-state';

export interface AppState {
    auth:AuthState
    blogs:BlogsState
    popularTags:PopularTagsState,
    article:ArticleState,
    createArticle:CreateArticleState,
    editArticle:EditArticleState,
    settings:SettingState,
    userProfile:UserProfileState
}
