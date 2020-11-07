import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './component/create-article.component';

const routes:Routes=[
  {
    path:'articles/new',component:CreateArticleComponent
  }
]

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateArticleModule { }
