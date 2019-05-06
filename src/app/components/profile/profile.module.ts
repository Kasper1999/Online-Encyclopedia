import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ProfileMainComponent } from './profile-main/profile-main.component';
import { ProfileSecurityComponent } from './profile-security/profile-security.component';
import { ProfilePersonalComponent } from './profile-personal/profile-personal.component';
import { ProfileComponent } from './profile.component';
import { ProfilePasswordComponent } from './profile-password/profile-password.component';
import { ProfileAppearanceComponent } from './profile-appearance/profile-appearance.component';
import { ProfileFriendsComponent } from './profile-friends/profile-friends.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { ProfilePrivacyComponent } from './profile-privacy/profile-privacy.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NvD3Module,
    ProfileRoutingModule,
    SharedModule,
    MatRadioModule
  ],
  declarations: [
    ProfileMainComponent,
    ProfileComponent,
    ProfilePersonalComponent,
    ProfileSidebarComponent,
    ProfileSecurityComponent,
    ProfilePasswordComponent,
    ProfileAppearanceComponent,
    ProfileFriendsComponent,
    ProfilePrivacyComponent
  ],
  providers: []
})
export class ProfileModule {}
