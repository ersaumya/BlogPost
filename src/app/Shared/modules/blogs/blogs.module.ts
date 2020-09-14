import { ErrorMessageModule } from './../error-message/error-message.module';
import { RouterModule } from '@angular/router';
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
    ErrorMessageModule,
    RouterModule
  ],
  exports: [BlogsComponent],
})
export class BlogsModule {}
