import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePersonalComponent } from './profile-personal/profile-personal.component';
import { ProfileMainComponent } from './profile-main/profile-main.component';
import { ProfileSecurityComponent } from './profile-security/profile-security.component';
import { ProfilePasswordComponent } from './profile-password/profile-password.component';
import { ProfileAppearanceComponent } from './profile-appearance/profile-appearance.component';
import { ProfileComponent } from './profile.component';
import { ProfileFriendsComponent } from './profile-friends/profile-friends.component';
import { ProfilePrivacyComponent } from './profile-privacy/profile-privacy.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfileMainComponent
  },
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'settings/personal',
        pathMatch: 'full', 
        component: ProfilePersonalComponent
      },
      {
        path: 'settings/security',
        pathMatch: 'full',
        component: ProfileSecurityComponent
      },
      {
        path: 'settings/password',
        pathMatch: 'full',
        component: ProfilePasswordComponent
      },
      {
        path: 'settings/appearance',
        pathMatch: 'full',
        component: ProfileAppearanceComponent
      },
      {
        path: 'settings/friends',
        pathMatch: 'full',
        component: ProfileFriendsComponent
      },
      {
        path: 'settings/privacy',
        pathMatch: 'full',
        component: ProfilePrivacyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
