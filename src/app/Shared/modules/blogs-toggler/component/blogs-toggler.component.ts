import { isLoggedInSelector } from './../../../../Auth/store/selectors';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blogs-toggler',
  templateUrl: './blogs-toggler.component.html',
  styleUrls: ['./blogs-toggler.component.scss']
})
export class BlogsTogglerComponent implements OnInit {

  @Input() tagsName:string;
  isLoggedIn$:Observable<boolean>

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues():void{
    this.isLoggedIn$=this.store.pipe(select(isLoggedInSelector))
  }

}
