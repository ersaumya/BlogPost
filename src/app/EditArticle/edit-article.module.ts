import { ArticleService as SharedArticleService } from './../Shared/services/article.service';
import { EditArticleService } from './service/edit-article.service';
import { StoreModule } from '@ngrx/store';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { UpdateArticleEffect } from './store/effects/updateArticle.effect';
import { EffectsModule } from '@ngrx/effects';
import { ArticleFormModule } from './../Shared/modules/article-form/article-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleComponent } from './component/edit-article.component';
import { RouterModule } from '@angular/router';
import { reducers } from './store/reducers';
import { LoadingModule } from '../Shared/modules/loading/loading.module';

const routes=[
  {path:'articles/:slug/edit',component:EditArticleComponent}
]

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule
  ],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
