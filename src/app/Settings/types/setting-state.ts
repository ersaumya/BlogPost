import { BackendErrors } from './../../Shared/types/backend-errors';
export interface SettingState {
  isSubmitting: boolean;
  validationErrors: BackendErrors | null;
}
