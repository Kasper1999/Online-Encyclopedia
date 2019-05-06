import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn
} from '@angular/forms';
import { AppState } from '../../../../app.state';
import { AuthService } from '../../../services/auth.service';
import { getPageType } from '../../reducers/selectors';
import { AuthActions } from '../../actions/auth.actions';
import { SnotifyService } from 'ng-snotify';
import { AlertService } from '../../../services/alert.service';
import { SidebarActions } from '../../../side-bar/actions/sidebar.action';
import { ValidateService } from '../../../services/validate.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup = null;
  registerForm: FormGroup = null;

  /* Ptoperty that changing form type in the template */
  selectedForm: string;

  /* Easter icon for login form */
  easterIcon: string;
  easterIcons: string[] = [];

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private authActions: AuthActions,
    private sidebarActions: SidebarActions,
    private authService: AuthService,
    private alertService: AlertService,
    private validateService: ValidateService
  ) {
    iconRegistry.addSvgIcon(
      'email',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/envelope.svg')
    );
    iconRegistry.addSvgIcon(
      'pass',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/lock.svg')
    );
    iconRegistry.addSvgIcon(
      'gift1',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/gift1.svg')
    );
    iconRegistry.addSvgIcon(
      'user',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/person_mat.svg')
    );
    iconRegistry.addSvgIcon(
      'vk',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/resource-vkontakte.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'googleplus',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/resource-googleplus.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/resource-twitter.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/resource-facebook.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'odnoklassniki',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/resource-odnoklassniki.svg'
      )
    );
    /* User icons */
    iconRegistry.addSvgIcon(
      'user',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/User.svg')
    );
    iconRegistry.addSvgIcon(
      'user_alien',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/User_alien.svg')
    );
    iconRegistry.addSvgIcon(
      'user_dracula',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/User_dracula.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'user_frankenstein',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/User_frankenstein.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'user_mummy',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/User_mummy.svg')
    );
    iconRegistry.addSvgIcon(
      'user_zombie',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/User_zombie.svg'
      )
    );

    this.easterIcons = [
      'user',
      'user_alien',
      'user_dracula',
      'user_frankenstein',
      'user_mummy',
      'user_zombie'
    ];
  }

  ngOnInit() {
    this.store.select(getPageType).subscribe(data => {
      this.selectedForm = data;
    });
    this.initLoginForm();
    this.initRegisterForm();
    this.initEasterIcon();
    this.checkEmail();
  }

  initLoginForm() {
    const login = '';
    const password = '';

    this.loginForm = this.fb.group({
      login: [login, Validators.required],
      password: [password, this.validateService.pwdValidators]
    });
  }

  initRegisterForm() {
    const nickname = '';
    const email = '';
    const password = '';
    const confirmationPassword = '';
    const emailPattern = '^[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';

    this.registerForm = this.fb.group({
      nickname: [
        nickname,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ])
      ],
      email: [email, [Validators.required, Validators.pattern(emailPattern)]],
      pwd: this.fb.group(
        {
          password: [password, this.validateService.pwdValidators],
          confirmationPassword: [
            confirmationPassword,
            this.validateService.pwdValidators
          ]
        },
        { validator: this.validateService.passwordsAreEqual() }
      )
    });
  }

  initEasterIcon(): void {
    this.easterIcon = this.easterIcons[
      Math.floor(Math.random() * this.easterIcons.length)
    ];
  }

  checkEmail() {
    this.registerForm.get('email').valueChanges.subscribe(() => {
      if (this.registerForm.get('email').valid) {
        const checkedEmail = this.registerForm.get('email').value;
        this.authService.emailExistsCheck(checkedEmail).subscribe(data => {
          if (data.emailExist === true) {
            this.registerForm.get('email').setErrors({ incorrect: true });
            this.registerForm.get('email').markAsTouched();
            this.alertService.notificationWarning(
              'Внимание!',
              'Указанный e-mail адрес занят'
            );
          } else {
            return;
          }
          return;
        });
      }
    });
  }

  toggleForm(form: string): void {
    const authPage: string = form;
    this.store.dispatch(this.authActions.toggleForm(authPage));
  }

  onLoginSubmit() {
    const user = {
      login: this.loginForm.get('login').value,
      password: this.loginForm.get('password').value
    };

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.signIn(user).subscribe(data => {
      if (data.success) {
        this.store.dispatch(this.sidebarActions.userAuthentified());
        this.store.dispatch(this.sidebarActions.sidebarOpen());
      }
    });
  }

  onRegisterSubmit() {
    const user = this.registerForm.value;

    if (
      user.password === user.nickname ||
      user.pwd.confirmationPassword === user.nickname
    ) {
      this.alertService.notificationError(
        'Ошибка!',
        'Пароль совaпадает с логином'
      );
      return;
    }

    if (this.registerForm.get('pwd').invalid) {
      this.alertService.notificationError('Ошибка!', 'Пароли не совпадают');
      return;
    }

    if (this.registerForm.invalid) {
      this.alertService.notificationError('Ошибка!', 'Форма не валидна');
      return;
    }

    user.password = user.pwd.password;
    user.confirmationPassword = user.pwd.confirmationPassword;

    this.authService.register(user).subscribe(data => {
      if (data.success) {
        this.store.dispatch(this.authActions.toggleForm('letterSendPage'));
      } else {
        this.alertService.notificationError('Ошибка валидации', 'body');
      }
    });
  }
}
