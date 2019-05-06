import { Action, ActionReducer } from '@ngrx/store';
import { SidebarActions } from '../actions/sidebar.action';
import { SidebarState } from './sidebar.state';

export const initialState: SidebarState = {
  user: false,
  open: false
};

export function reducer(
  state = initialState,
  { type, payload }: any
): SidebarState {
  switch (type) {
    case SidebarActions.USER_IS_AUTHENTIFIED:
      return {
        ...state,
        user: true,
        open: false
      };
    case SidebarActions.USER_LOGOUT:
      return {
        ...state,
        user: false,
        open: false
      };
    case SidebarActions.OPEN:
      return {
        ...state,
        open: true
      };
    case SidebarActions.CLOSE:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
}
