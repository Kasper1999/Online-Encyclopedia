import { Action, ActionReducer } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { AuthState } from './auth.state';
import { IAuthPage } from '../../models/authPage';

export const initialState: AuthState = {
  pageType: 'loginPage'
};

export function reducer(
  state = initialState,
  { type, payload }: any
): AuthState {
  switch (type) {
    case AuthActions.TOGGLE_FORM:
      return {
        ...state,
        pageType: payload
      };
    default:
      return state;
  }
}
