import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { registerAction } from './../../store/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  form:FormGroup;

  constructor(private fb:FormBuilder,private store:Store) { }

  ngOnInit(): void {
    this.initialiseForm();
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
    this.store.dispatch(registerAction(this.form.value));
  }

}
