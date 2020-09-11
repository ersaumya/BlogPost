import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalBlogsComponent } from './global-blogs/global-blogs.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalBlogsComponent,
  }
];

@NgModule({
  declarations: [GlobalBlogsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GlobalBlogsModule {}
