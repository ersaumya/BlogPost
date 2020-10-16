import { ErrorMessageModule } from './../error-message/error-message.module';
import { LoadingModule } from './../loading/loading.module';
import { RouterModule } from '@angular/router';
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducers } from './store/reducers';
import { PopularTagsComponent } from './component/popular-tags.component';



@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    RouterModule,
    LoadingModule,
    ErrorMessageModule
  ],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
