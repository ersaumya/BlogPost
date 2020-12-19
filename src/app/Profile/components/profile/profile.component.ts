import { CurrentUser } from './../../../Shared/types/current-user';
import { currentUserSelector } from './../../../Auth/store/selectors';
import {
  errorSelector,
  isLoadingSelector,
  userProfileSelector,
} from './../../store/selectors';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { getUserProfileAction } from './../../store/actions/getUserProfile.action';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { UserProfile } from '../../types/user-profile';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  userProfileSubscription: Subscription;
  slug: string;
  isCurrentUserProfile$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListners();
  }

  initializeValues(): void {
    
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
   
    this.isCurrentUserProfile$ = combineLatest(
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean))
    ).pipe(
      map(([currentUser, userProfile]: [CurrentUser, UserProfile]) => {
        return currentUser.username === userProfile.username;
      })
    );
  }

  getApiUrl():string{
    const isFavorites = this.router.url.includes('favorites');
    return isFavorites
       ? `/articles?favorited=${this.slug}`
       : `/articles?author=${this.slug}`;
  }

  initializeListners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: UserProfile) => {
        this.userProfile = userProfile;
      });
      this.route.params.subscribe((params:Params)=>{
        this.slug=params.slug
        this.fetchUserProfile()
      })
  }

  fetchUserProfile(): void {
    this.store.dispatch(getUserProfileAction({ slug: this.slug }));
  }
}
