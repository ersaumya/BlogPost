import { registerAction } from './../../store/actions/register.action';
import { isSubmittingSelector } from './../../store/selectors';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../../types/register-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  form:FormGroup;
  isSubmitting$:Observable<boolean>

  constructor(private fb:FormBuilder,private store:Store) { }

  ngOnInit(): void {
    this.initialiseForm();
    this.initialiseValues();
  }

  initialiseValues():void{
    this.isSubmitting$=this.store.pipe(select(isSubmittingSelector))
  }

  initialiseForm():void{
    console.log('initilised')
    this.form=this.fb.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmit():void{
    console.log('submit',this.form.value,this.form.valid);
    const request:RegisterRequest = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({request}));
    
  }
 
}
