import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-blogs',
  templateUrl: './tag-blogs.component.html',
  styleUrls: ['./tag-blogs.component.scss'],
})
export class TagBlogsComponent implements OnInit {
  tagName: string;
  apiUrl:string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tagName = this.route.snapshot.paramMap.get('slug');
    this.apiUrl = `/articles?tag=${this.tagName}` 
  }
}
