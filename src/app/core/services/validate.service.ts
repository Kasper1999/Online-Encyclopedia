import { Injectable } from '@angular/core';
import { ValidatorFn, Validators, FormGroup } from '@angular/forms';

@Injectable()
export class ValidateService {
  constructor() {}

  pwdValidators: ValidatorFn[] = [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20)
  ];

  passwordsAreEqual(): ValidatorFn {
    return (
      group: FormGroup
    ): {
      [key: string]: any;
    } => {
      if (
        !(group.dirty || group.touched) ||
        group.get('password').value === group.get('confirmationPassword').value
      ) {
        return null;
      }
      return {
        custom: 'Passwords are not equal'
      };
    };
  }
}
