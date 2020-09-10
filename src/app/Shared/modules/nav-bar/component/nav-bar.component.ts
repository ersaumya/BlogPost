import { isLoggedInSelector, currentUserSelector, isAnonymousSelector } from './../../../../Auth/store/selectors';
import { CurrentUser } from './../../../types/current-user';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLoggedIn$:Observable<boolean>
  isAnonymous$:Observable<boolean>
  currentUser$:Observable<CurrentUser | null>

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.isLoggedIn$=this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$=this.store.pipe(select(isAnonymousSelector))
    this.currentUser$=this.store.pipe(select(currentUserSelector))
  }

}
