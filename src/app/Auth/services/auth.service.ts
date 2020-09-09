import { LoginRequest } from './../types/login-request';
import { IAppConfig, APP_CONFIG } from './../../Shared/config/appconfig';
import { AuthResponse } from './../types/auth-response';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentUser } from './../../Shared/types/current-user';
import { RegisterRequest } from './../types/register-request';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private apiconfig: IAppConfig
  ) {}

  getUser(response:AuthResponse):CurrentUser{
    return response.user
  }

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url =this.apiconfig.apiEndPoint + '/users';
    return this.http.post<AuthResponse>(url, data).pipe(map(this.getUser));
  }

  login(data:LoginRequest):Observable<CurrentUser>{
    const url=this.apiconfig.apiEndPoint + '/users/login';
    return this.http.post<AuthResponse>(url, data).pipe(map(this.getUser));
  }
}
