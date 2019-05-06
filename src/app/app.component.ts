import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { getUserAuth } from '../app/core/side-bar/reducers/selectors';
import { SidebarActions } from './core/side-bar/actions/sidebar.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private store: Store<AppState>,
    private sidebarActions: SidebarActions
  ) {
    if (localStorage.getItem('user')) {
      this.store.dispatch(sidebarActions.userAuthentified());
    }
  }
}
