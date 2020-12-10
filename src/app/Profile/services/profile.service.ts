import { map } from 'rxjs/operators';
import { UserProfileResponse } from './../types/user-profile-response';
import { APP_CONFIG, IAppConfig } from './../../Shared/config/appconfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { UserProfile } from '../types/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private apiconfig: IAppConfig
  ) {}

  getUserProfile(slug: string): Observable<UserProfile> {
    const url = `${this.apiconfig.apiEndPoint}/profiles/${slug}`;
    return this.http
      .get(url)
      .pipe(map((response: UserProfileResponse) => response.profile));
  }
}
