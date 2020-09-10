import { BackendErrors } from '../../../types/backend-errors';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  errorMessages: string[];
  @Input() backendErrors: BackendErrors;
  ngOnInit():void{
    this.errorMessages=Object.keys(this.backendErrors).map(
      (name:string)=>{
      const messages=this.backendErrors[name].join(' ')
      return `${name} ${messages}`
    })
  }
}
