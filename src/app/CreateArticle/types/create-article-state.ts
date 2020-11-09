import { BackendErrors } from './../../Shared/types/backend-errors';
export interface CreateArticleState {
    isSubmitting:boolean,
    backendErrors:BackendErrors | null
}
