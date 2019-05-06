import { IAuthPage } from '../../models/authPage';

export interface AuthState extends IAuthPage {
  pageType: string;
}
