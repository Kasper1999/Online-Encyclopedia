import { AuthState } from './core/auth/reducers/auth.state';
import { SidebarState } from './core/side-bar/reducers/sidebar.state';

// This should hold the AppState interface
// Ideally importing all the substate for the application
/**
 *
 *
 * @export
 * @interface AppState
 */
export interface AppState {
  auth: AuthState;
  sidebar: SidebarState;
}
