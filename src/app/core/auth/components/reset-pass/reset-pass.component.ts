import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { AuthActions } from '../../actions/auth.actions';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {
  resetForm: FormGroup = null;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private store: Store<AppState>,
    private authActions: AuthActions,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    iconRegistry.addSvgIcon(
      'email',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/envelope.svg')
    );
    iconRegistry.addSvgIcon(
      'key',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/key2.svg')
    );
  }

  ngOnInit() {
    this.initResetPassForm();
  }

  initResetPassForm() {
    const emailPattern = '^[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
    const email = '';
    this.resetForm = this.fb.group({
      email: [email, [Validators.required, Validators.pattern(emailPattern)]]
    });
  }

  toggleForm(form: string): void {
    const authPage = form;
    this.store.dispatch(this.authActions.toggleForm(authPage));
  }

  onResetSubmit() {
    const email = {
      email: this.resetForm.value
    };

    /* this.authService.resetPassword(email).subscribe(data => {
      if (data.success) {
        this.store.dispatch(this.authActions.toggleForm('changePassPage'));
      }
    }); */
  }
}
