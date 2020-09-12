import { GetBlogEffect } from './store/effects/getBlog.effect';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './component/blogs.component';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, EffectsModule.forFeature([GetBlogEffect])],
  exports: [BlogsComponent],
})
export class BlogsModule {}
