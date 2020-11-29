import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.scss'],
})
export class AddToFavoriteComponent implements OnInit {
  favoriteCount: number;
  isFavorited:boolean;

  @Input() isFavorite: boolean;
  @Input() favoritesCount: number;
  @Input() articleSlug: string;
  constructor() {}

  ngOnInit(): void {
    this.favoriteCount=this.favoritesCount
    this.isFavorited=this.isFavorite
  }

  handleLike():void{
    if(this.isFavorited){
      this.favoriteCount=this.favoriteCount - 1
    }else{
      this.favoriteCount=this.favoriteCount + 1
    }
    this.isFavorited=!this.isFavorited
  }
}
