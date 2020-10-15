import { map } from 'rxjs/operators';
import { APP_CONFIG, IAppConfig } from './../../../config/appconfig';
import { PopularTag } from './../../../types/popular-tag';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private apiconfig: IAppConfig
  ) {}

  getPopularTags(): Observable<PopularTag[]> {
    const url=this.apiconfig.apiEndPoint + '/tags'
    return this.http.get(url).pipe(
      map((response:any)=>{
       return response.tags
      })
    )
  }
}
