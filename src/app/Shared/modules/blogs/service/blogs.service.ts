import { APP_CONFIG, IAppConfig } from './../../../config/appconfig';
import { HttpClient } from '@angular/common/http';
import { GetblogResponse } from './../types/getblog-response';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private apiconfig: IAppConfig
  ) {}

  getBlog(url: string): Observable<GetblogResponse> {
    const fullUrl=this.apiconfig.apiEndPoint + url
    return this.http.get<GetblogResponse>(fullUrl);
  }
}
