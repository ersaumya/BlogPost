import { PopularTag } from './../../../types/popular-tag';

export interface PopularTagsState {
  isLoading: boolean;
  error: string | null;
  data: PopularTag[] | null;
}
