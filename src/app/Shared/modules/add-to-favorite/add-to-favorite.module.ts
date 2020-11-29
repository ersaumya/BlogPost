import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoriteComponent } from './component/add-to-favorite.component';



@NgModule({
  declarations: [AddToFavoriteComponent],
  imports: [
    CommonModule
  ],
  exports:[AddToFavoriteComponent]
})
export class AddToFavoriteModule { }
