import { AddToFavoritesEffect } from './store/effects/addToFavorite.effect';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoriteComponent } from './component/add-to-favorite.component';



@NgModule({
  declarations: [AddToFavoriteComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AddToFavoritesEffect])
  ],
  exports:[AddToFavoriteComponent]
})
export class AddToFavoriteModule { }
