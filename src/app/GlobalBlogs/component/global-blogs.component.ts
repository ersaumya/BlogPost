import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-blogs',
  templateUrl: './global-blogs.component.html',
  styleUrls: ['./global-blogs.component.scss']
})
export class GlobalBlogsComponent implements OnInit {

  apiUrl='/articles'
  constructor() { }

  ngOnInit(): void {
  }

}
