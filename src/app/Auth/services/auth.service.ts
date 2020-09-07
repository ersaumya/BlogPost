import { AuthResponse } from './../types/auth-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentUser } from './../../Shared/types/current-user';
import { RegisterRequest } from './../types/register-request';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users'
    return this.http.post<AuthResponse>(url,data).pipe(map((response:AuthResponse)=>response.user))
  }
}
