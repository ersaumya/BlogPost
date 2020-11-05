import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { EffectsModule } from '@ngrx/effects';
import { ArticleService } from '../Shared/services/article.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './component/article.component';
import { reducers } from './store/reducers';
import { LoadingModule } from '../Shared/modules/loading/loading.module';
import { ErrorMessageModule } from '../Shared/modules/error-message/error-message.module';
import { TagListModule } from '../Shared/modules/tag-list/tag-list.module';

const routes:Routes=[
  {path:'articles/:slug',component:ArticleComponent}
]

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule
  ],
  providers: [ArticleService],
})
export class ArticleModule {}
