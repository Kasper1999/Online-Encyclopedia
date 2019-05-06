import { Action } from '@ngrx/store';

export class SidebarActions {
  static USER_IS_AUTHENTIFIED = 'USER_IS_AUTHENTIFIED';
  static USER_LOGOUT = 'USER_LOGOUT';
  static OPEN = 'OPEN';
  static CLOSE = 'CLOSE';

  userAuthentified() {
    return { type: SidebarActions.USER_IS_AUTHENTIFIED };
  }

  userLogout() {
    return { type: SidebarActions.USER_LOGOUT };
  }

  sidebarOpen() {
    return { type: SidebarActions.OPEN };
  }

  sidebarClose() {
    return { type: SidebarActions.CLOSE };
  }
}
