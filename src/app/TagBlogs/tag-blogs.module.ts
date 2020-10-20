import { BlogsTogglerModule } from './../Shared/modules/blogs-toggler/blogs-toggler.module';
import { PopularTagsModule } from './../Shared/modules/popular-tags/popular-tags.module';
import { BannerModule } from './../Shared/modules/banner/banner.module';
import { BlogsModule } from './../Shared/modules/blogs/blogs.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagBlogsComponent } from './component/tag-blogs.component';

const routes: Routes = [
  {
    path: 'tags/:slug',
    component: TagBlogsComponent,
  }
];

@NgModule({
  declarations: [TagBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BlogsModule,
    BannerModule,
    PopularTagsModule,
    BlogsTogglerModule,
  ],
})
export class TagBlogsModule {}
