import { NavBarModule } from './Shared/modules/nav-bar/nav-bar.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Auth/auth.module';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
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
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AppRoutingModule,
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
