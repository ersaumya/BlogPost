import { GetblogResponse } from './getblog-response';
export interface BlogsState {
  isLoading: boolean;
  error: string | null;
  data: GetblogResponse | null;
}
