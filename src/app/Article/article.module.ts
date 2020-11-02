import { ArticleService } from './../Shared/services/article.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ArticleService]
})
export class ArticleModule { }
