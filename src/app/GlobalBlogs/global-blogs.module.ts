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
    BannerModule
  ],
})
export class GlobalBlogsModule {}
