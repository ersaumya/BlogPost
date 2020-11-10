import { Article } from '../../Shared/types/article';
import { BackendErrors } from './../../Shared/types/backend-errors';
export interface EditArticleState {
    article:Article | null
    isLoading:boolean
    isSubmitting:boolean
    backendErrors:BackendErrors| null
}
