import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `<div>{{ errorMessage }}</div>`,
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() errorMessage: string = 'Something went wrong..';
  constructor() {}

  ngOnInit(): void {}
}
