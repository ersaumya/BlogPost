import { SaveArticleResponse } from './../../Shared/types/save-article-response';
import { Observable } from 'rxjs';
import { ArticleInput } from './../../Shared/types/article-input';
import { APP_CONFIG,IAppConfig } from './../../Shared/config/appconfig';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditArticleService {

  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private apiconfig: IAppConfig) { }

  updateArticle(slug:string,articleInput:ArticleInput):Observable<ArticleInput>{
    const url=`${this.apiconfig.apiEndPoint}/articles/${slug}`
    return this.http.put<SaveArticleResponse>(url,articleInput)
    .pipe(map((response:SaveArticleResponse)=>{
      return response.article
    }))
  }
}
