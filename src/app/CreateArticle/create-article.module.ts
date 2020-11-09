import { StoreModule } from '@ngrx/store';
import { CreateArticleEffect } from './store/effects/createArticle.effect';
import { EffectsModule } from '@ngrx/effects';
import { CreateArticleService } from './service/create-article.service';
import { ArticleFormModule } from './../Shared/modules/article-form/article-form.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './component/create-article.component';
import { reducers } from './store/reducers';

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle',reducers)
  ],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
