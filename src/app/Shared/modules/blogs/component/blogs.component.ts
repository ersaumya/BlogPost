import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { getBlogAction } from '../store/actions/getBlog.action';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  @Input() apiUrl: string;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getBlogAction({ url: this.apiUrl }));
  }
}
