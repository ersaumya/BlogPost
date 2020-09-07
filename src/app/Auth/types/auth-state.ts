import { BackendErrors } from './../../Shared/types/backend-errors';
import { CurrentUser } from './../../Shared/types/current-user';
export interface AuthState {
    isSubmitting:boolean
    currentUser:CurrentUser | null
    isLoggedIn:boolean | null
    validationErrors:BackendErrors | null
}
