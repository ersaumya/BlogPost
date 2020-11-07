import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from './../backend-error-messages/backend-error-messages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from './component/article-form.component';



@NgModule({
  declarations: [ArticleFormComponent],
  imports: [
    CommonModule,
    BackendErrorMessagesModule,ReactiveFormsModule
  ],
  exports:[ArticleFormComponent]
})
export class ArticleFormModule { }
