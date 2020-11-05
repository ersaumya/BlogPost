import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IAppConfig, APP_CONFIG } from '../../Shared/config/appconfig';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private apiconfig: IAppConfig
  ) {}

  deleteArticle(slug: string): Observable<{}> {
    const url = this.apiconfig.apiEndPoint + '/articles/' + slug;
    return this.http.delete<{}>(url);
  }
}
