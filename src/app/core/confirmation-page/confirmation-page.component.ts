import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { SidebarActions } from '../side-bar/actions/sidebar.action';
import { AuthActions } from '../auth/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss']
})
export class ConfirmationPageComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private sidebarActions: SidebarActions,
    private authActions: AuthActions,
    private router: Router
  ) {}

  ngOnInit() {}

  goToPassChange() {
    this.router.navigate(['']);
    this.store.dispatch(this.sidebarActions.sidebarOpen());
    this.store.dispatch(this.authActions.toggleForm('changePassPage'));
  }
}
