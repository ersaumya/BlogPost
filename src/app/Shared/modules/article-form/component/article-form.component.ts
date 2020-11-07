import { FormGroup, FormBuilder } from '@angular/forms';
import { BackendErrors } from './../../../types/backend-errors';
import { ArticleInput } from './../../../types/article-input';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValue: ArticleInput;
  @Input() isSubmittng: boolean;
  @Input() errors: BackendErrors | null;
  @Output() articleSubmit=new EventEmitter<ArticleInput>();
  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm(): void {
    this.articleForm=this.fb.group({
      title:this.initialValue.title,
      description:this.initialValue.description,
      body:this.initialValue.body,
      tagList:this.initialValue.tagList.join(' ')
    })
  }

  onSubmit():void{
    this.articleSubmit.emit(this.articleForm.value);
  }
}
