import { addToFavoritesAction } from './../store/actions/add-to-favorite.action';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.scss'],
})
export class AddToFavoriteComponent implements OnInit {
  favoriteCount: number;
  isFavorited: boolean;

  @Input() isFavorite: boolean;
  @Input() favoritesCount: number;
  @Input() articleSlug: string;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favoriteCount = this.favoritesCount;
    this.isFavorited = this.isFavorite;
  }

  handleLike(): void {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlug,
      })
    );
    if (this.isFavorited) {
      this.favoriteCount = this.favoriteCount - 1;
    } else {
      this.favoriteCount = this.favoriteCount + 1;
    }
    this.isFavorited = !this.isFavorited;
  }
}
