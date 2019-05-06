/**
 * User model
 */

export class IUser {
  nickname: string;
  email: string;
  password: string;
  confirmationPassword: string;
}

export class User {
  constructor(
    public nickname: string,
    public email: string,
    public password: string,
    public confirmationPassword: string
  ) {}
}
