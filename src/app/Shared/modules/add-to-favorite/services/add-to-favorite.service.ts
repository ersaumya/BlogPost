import { map } from 'rxjs/operators';
import { GetArticleResponse } from './../../../types/get-article-response';
import { APP_CONFIG, IAppConfig } from './../../../config/appconfig';
import { HttpClient } from '@angular/common/http';
import { Article } from './../../../types/article';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddToFavoriteService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private apiconfig: IAppConfig
  ) {}
  addToFavorite(slug: string): Observable<Article> {
    const url = this.getUrl(slug);
    return this.http.post(url, {}).pipe(map(this.getArticle));
  }
  removeFromFavorite(slug: string): Observable<Article> {
    const url = this.getUrl(slug);
    return this.http.delete(url).pipe(map(this.getArticle));
  }

  getUrl(slug: string): string {
    return `${this.apiconfig.apiEndPoint}/articles/${slug}/favorite`;
  }

  getArticle(response: GetArticleResponse): Article {
    return response.article;
  }
}
