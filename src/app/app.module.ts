import { ProfileModule } from './Profile/profile.module';
import { SettingsModule } from './Settings/settings.module';
import { EditArticleModule } from './EditArticle/edit-article.module';
import { CreateArticleModule } from './CreateArticle/create-article.module';
import { ArticleModule } from './Article/article.module';
import { TagBlogsModule } from './TagBlogs/tag-blogs.module';
import { MyBlogsModule } from './MyBlogs/my-blogs.module';
import { GlobalBlogsModule } from './GlobalBlogs/global-blogs.module';
import { AuthInterceptor } from './Shared/services/auth.interceptor';
import { NavBarModule } from './Shared/modules/nav-bar/nav-bar.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Auth/auth.module';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { APP_CONFIG, IAppConfig } from './Shared/config/appconfig';

const AppConfig: IAppConfig = {
  apiEndPoint: environment.apiEndPoint,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    NavBarModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    GlobalBlogsModule,
    MyBlogsModule,
    TagBlogsModule,
    CreateArticleModule, //order is important as routing of article & create article is same
    ArticleModule,
    EditArticleModule,
    ProfileModule,
    AppRoutingModule,
    SettingsModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
