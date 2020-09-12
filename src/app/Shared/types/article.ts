import { Profile } from './profile';
export interface Article {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author:Profile;
  favorites: boolean;
  favoritesCount: number;
}
