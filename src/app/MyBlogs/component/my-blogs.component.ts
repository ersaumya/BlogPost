import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.scss'],
})
export class MyBlogsComponent implements OnInit {
  apiUrl = '/articles/feed';
  constructor() {}

  ngOnInit(): void {}
}
