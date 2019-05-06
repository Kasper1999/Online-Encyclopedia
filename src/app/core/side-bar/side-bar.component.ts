import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  Inject
} from '@angular/core';
import { Store } from '@ngrx/store';
import { MatIconRegistry, MatSidenav } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { AppState } from '../../app.state';
import { SidebarActions } from './actions/sidebar.action';
import { getType } from './reducers/selectors';
import { getUserAuth } from './reducers/selectors';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  user = false; // User logged in || not logged in
  sidebarOpen: boolean;

  sidebarFixed: boolean;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private store: Store<AppState>,
    private sidebarActions: SidebarActions,
    private authService: AuthService
  ) {
    this.sidebarFixed = false;
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/gamburger.svg')
    );
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/search.svg')
    );
    iconRegistry.addSvgIcon(
      'compass',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/Compass.svg')
    );
    iconRegistry.addSvgIcon(
      'attention',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/attention.svg')
    );
    iconRegistry.addSvgIcon(
      'home',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/home.svg')
    );
    iconRegistry.addSvgIcon(
      'chevronLeft',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/chevron-left.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'tweak',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/cog.svg')
    );
    iconRegistry.addSvgIcon(
      'volume',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/volume-up.svg')
    );
    iconRegistry.addSvgIcon(
      'enter',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/door_enter.svg')
    );
    iconRegistry.addSvgIcon(
      'exit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/door_exit.svg')
    );
    iconRegistry.addSvgIcon(
      'letter',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/envelope.svg')
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollOffset > 100) {
      this.sidebarFixed = true;
    } else if (scrollOffset < 100) {
      this.sidebarFixed = false;
    }
  }

  ngOnInit() {
    this.store.select(getType).subscribe(data => {
      if (data) {
        // sidebar open
        setTimeout(() => {
          this.sidenav.open();
          this.sidebarOpen = true;
        }, 1);
      } else {
        setTimeout(() => {
          this.sidenav.close();
          this.sidebarOpen = false;
        }, 1);
      }
    });

    this.store.select(getUserAuth).subscribe(data => {
      data ? (this.user = true) : (this.user = false);
    });
  }

  open() {
    this.store.dispatch(this.sidebarActions.sidebarOpen());
  }

  close() {
    this.store.dispatch(this.sidebarActions.sidebarClose());
  }

  signOut() {
    this.authService.signOut();
  }
}
