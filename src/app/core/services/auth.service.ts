import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { environment } from '../../../environments/environment';

import { User } from '../models/user';
import { AlertService } from './alert.service';
import { StorageService } from './storage.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { AuthActions } from '../auth/actions/auth.actions';
import { SidebarActions } from '../side-bar/actions/sidebar.action';

const apiHost = environment.api;

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>,
    private authActions: AuthActions,
    private sidebarActions: SidebarActions,
    private storageService: StorageService,
    private alertService: AlertService
  ) {}

  registerOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  loginOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  resendEmailOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.storageService.get('AccessToken')}`
    })
  };

  register(user: object): Observable<any> {
    return this.http
      .post(`${apiHost}auth/register`, user, this.registerOptions)
      .map((res: Response) => {
        if (res) {
          user = (res as any).user;
          const tokens = (res as any).tokens;
          this.storageService.set('AccessToken', tokens.accessToken);
          this.storageService.set('RefreshToken', tokens.refreshToken);
          this.storageService.set('user', JSON.stringify(user));
          return { success: true, msg: 'Success user register' };
        }
      })
      .catch((error: any) => {
        if (error.status === 409) {
          this.alertService.notificationError('Error', 'User already exists');
          return Observable.throw(new Error(error.status));
        } else if (error.status === 422) {
          this.alertService.notificationError(
            'Error',
            'Passwords do not match or Invalid email format'
          );
          return Observable.throw(new Error(error.status));
        } else if (error.status === 404) {
          this.alertService.notificationError('Error', 'Not found');
          return Observable.throw(new Error(error.status));
        } else {
          this.alertService.notificationError(
            'Unexpected Error',
            'Perhaps our server fell'
          );
          return Observable.throw(new Error());
        }
      });
  }

  signIn(user: object): Observable<any> {
    return this.http
      .post(`${apiHost}auth/login`, user, this.loginOptions)
      .map((res: Response) => {
        if (res) {
          user = (res as any).user;
          const tokens = (res as any).tokens;
          this.storageService.set('AccessToken', tokens.accessToken);
          this.storageService.set('RefreshToken', tokens.refreshToken);
          this.storageService.set('user', JSON.stringify(user));
          return { success: true, msg: 'Success user login' };
        }
      })
      .catch((error: any) => {
        if (error.status === 401) {
          this.alertService.notificationError('Error', "User doesn't exists");
          return Observable.throw(new Error(error.status));
        } else if (error.status === 404) {
          this.alertService.notificationError('Error', 'Not found');
          return Observable.throw(new Error(error.status));
        } else {
          this.alertService.notificationError(
            'Unexpected Error',
            'Perhaps our server fell'
          );
          return Observable.throw(new Error());
        }
      });
  }

  emailExistsCheck(email: string): Observable<any> {
    return this.http
      .get(`${apiHost}auth/check-email?email=${email}`, this.loginOptions)
      .delay(1000)
      .map((res: Response) => {
        return { emailExist: (res as any).emailExists };
      });
  }

  /*   resetPassword(email): Observable<any> {
    const token = this.storageService.get('accessToken');
    return this.http
      .post(`${apiHost}/auth/confirm-email?token=${token}`, email, this.loginOptions)
      .map(() => {});
  } */

  resendEmailConfirm() {
    return this.http
      .get(`${apiHost}/auth/resend-email-confirmation`, this.resendEmailOptions)
      .map(() => {});
  }

  signOut() {
    this.storageService.clear('AccessToken');
    this.storageService.clear('RefreshToken');
    this.storageService.clear('user');
    this.store.dispatch(this.sidebarActions.userLogout());
    this.store.dispatch(this.authActions.toggleForm('loginPage'));
    this.store.dispatch(this.sidebarActions.sidebarOpen());
    /* return this.http.post(`${apiHost}/auth/logout`, this.loginOptions)
      .map((res: Response) => {
      }); */
  }
}
