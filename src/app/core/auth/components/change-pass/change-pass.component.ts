import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { AuthActions } from '../../actions/auth.actions';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  changeForm: FormGroup = null;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private store: Store<AppState>,
    private authActions: AuthActions
  ) {
    iconRegistry.addSvgIcon(
      'lock',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/lock.svg')
    );
    iconRegistry.addSvgIcon(
      'key',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/key2.svg')
    );

    this.changeForm = new FormGroup({
      password: new FormControl(),
      confirm: new FormControl()
    });
  }

  ngOnInit() {}

  toggleForm(form: string): void {
    const authPage = form;
    this.store.dispatch(this.authActions.toggleForm(authPage));
  }

  onChangeSubmit() {}
}
