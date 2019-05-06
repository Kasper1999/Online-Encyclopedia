import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { AuthActions } from '../../actions/auth.actions';

@Component({
  selector: 'app-letter-send',
  templateUrl: './letter-send.component.html',
  styleUrls: ['./letter-send.component.scss']
})
export class LetterSendComponent implements OnInit {
  /* Timer variables */
  initMinutes: number;
  initSeconds: number;

  sendLocked: boolean;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private store: Store<AppState>,
    private authActions: AuthActions
  ) {
    this.sendLocked = true;
    iconRegistry.addSvgIcon(
      'email',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/envelope.svg')
    );
  }

  ngOnInit() {
    this.timer();
  }

  toggleForm(form: string): void {
    const authPage = form;
    this.store.dispatch(this.authActions.toggleForm(authPage));
  }

  timer() {
    this.sendLocked = true;
    this.initMinutes = 4;
    this.initSeconds = 60;
    const x = setInterval(() => {
      this.initSeconds--;
      if (this.initSeconds === -1) {
        this.initMinutes--;
        this.initSeconds = 59;
      }
      if (this.initMinutes === 0 && this.initSeconds === 0) {
        clearInterval(x);
        this.sendLocked = false;
      }
    }, 1000);
  }
}
