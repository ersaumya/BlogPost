import { GetBlogEffect } from './store/effects/getBlog.effect';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './component/blogs.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/Shared/modules/blogs/store/reducers';

@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('blogs', reducers),
    EffectsModule.forFeature([GetBlogEffect]),
  ],
  exports: [BlogsComponent],
})
export class BlogsModule {}