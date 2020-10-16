import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducers } from './store/reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTag',reducers),
    EffectsModule.forFeature([GetPopularTagsEffect])
  ]
})
export class PopularTagsModule { }
