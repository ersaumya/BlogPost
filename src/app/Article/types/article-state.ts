import { Article } from './../../Shared/types/article';

export interface ArticleState {
  isLoading: boolean;
  error: string | null;
  data: Article | null;
}
