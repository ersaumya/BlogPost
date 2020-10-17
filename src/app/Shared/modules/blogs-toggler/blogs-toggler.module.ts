import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsTogglerComponent } from './component/blogs-toggler.component';



@NgModule({
  declarations: [BlogsTogglerComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[BlogsTogglerComponent]
})
export class BlogsTogglerModule { }
