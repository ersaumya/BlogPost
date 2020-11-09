import { map } from 'rxjs/operators';
import { SaveArticleResponse } from './../../Shared/types/save-article-response';
import { APP_CONFIG ,IAppConfig} from './../../Shared/config/appconfig';
import { Observable } from 'rxjs';
import { ArticleInput } from './../../Shared/types/article-input';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Article } from '../../Shared/types/article';

@Injectable({
  providedIn: 'root',
})
export class CreateArticleService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private apiconfig: IAppConfig
  ) {}

  createArticle(articleInput: ArticleInput): Observable<Article> {
    const url = this.apiconfig.apiEndPoint + '/articles';
    return this.http.post<SaveArticleResponse>(url,articleInput).pipe(map((response:SaveArticleResponse)=>{
      return response.article
    }))
  }
}
