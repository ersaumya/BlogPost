import { BlogsTogglerModule } from './../Shared/modules/blogs-toggler/blogs-toggler.module';
import { PopularTagsModule } from './../Shared/modules/popular-tags/popular-tags.module';
import { BlogsModule } from './../Shared/modules/blogs/blogs.module';
import { BannerModule } from './../Shared/modules/banner/banner.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBlogsComponent } from './component/my-blogs.component';

const routes: Routes = [
  {
    path: 'feed',
    component: MyBlogsComponent,
  }
];


@NgModule({
  declarations: [MyBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BlogsModule,
    BannerModule,
    PopularTagsModule,
    BlogsTogglerModule,
  ],
})
export class MyBlogsModule {}
