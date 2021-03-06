import { BlogsTogglerModule } from './../Shared/modules/blogs-toggler/blogs-toggler.module';
import { PopularTagsModule } from './../Shared/modules/popular-tags/popular-tags.module';
import { BannerModule } from './../Shared/modules/banner/banner.module';
import { BlogsModule } from './../Shared/modules/blogs/blogs.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalBlogsComponent } from './component/global-blogs.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalBlogsComponent,
  }
];

@NgModule({
  declarations: [GlobalBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BlogsModule,
    BannerModule,
    PopularTagsModule,
    BlogsTogglerModule,
  ],
})
export class GlobalBlogsModule {}
