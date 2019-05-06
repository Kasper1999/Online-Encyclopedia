import { Action } from '@ngrx/store';

export class AuthActions {
  static TOGGLE_FORM = 'TOGGLE_FORM';

  toggleForm(payload: string) {
    return { type: AuthActions.TOGGLE_FORM, payload };
  }
}
