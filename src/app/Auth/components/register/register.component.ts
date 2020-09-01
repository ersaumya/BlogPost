import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  form:FormGroup;

  constructor(private fb:FormBuilder) { }

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
  }

}
