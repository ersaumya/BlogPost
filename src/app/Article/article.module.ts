import { GetArticleEffect } from './store/effects/getArticle.effect';
import { EffectsModule } from '@ngrx/effects';
import { ArticleService } from './../Shared/services/article.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect])
  ],
  providers:[ArticleService]
})
export class ArticleModule { }
