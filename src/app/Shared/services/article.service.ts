import { map } from 'rxjs/operators';
import { IAppConfig, APP_CONFIG } from './../config/appconfig';
import { Article } from './../types/article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { GetArticleResponse } from '../types/get-article-response';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private apiconfig: IAppConfig
  ) {}

  getArticle(slug: string): Observable<Article> {
    const url=this.apiconfig.apiEndPoint + "/articles/" + slug;
    return this.http.get<GetArticleResponse>(url).pipe(
      map((response:GetArticleResponse)=>{
        return response.article
      })
    )
  }
}
