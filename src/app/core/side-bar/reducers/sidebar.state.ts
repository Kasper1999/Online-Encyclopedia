import { Map, Record } from 'immutable';
import { ISidebar } from '../../models/sidebar';

export interface SidebarState extends ISidebar {
  user: boolean;
  open: boolean;
}
