import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from '../../shared/shared.module';

import { SideBarComponent } from './side-bar.component';
import { AuthComponent } from '../auth/components/auth-form/auth.component';
import { ChangePassComponent } from '../auth/components/change-pass/change-pass.component';
import { ResetPassComponent } from '../auth/components/reset-pass/reset-pass.component';
import { LetterSendComponent } from '../auth/components/letter-send/letter-send.component';
import { ScrollbarModule } from 'ngx-scrollbar';
import { AuthActions } from '../auth/actions/auth.actions';
import { SidebarActions } from './actions/sidebar.action';

const UI_COMPONENTS = [
  SideBarComponent,
  AuthComponent,
  ChangePassComponent,
  ResetPassComponent,
  LetterSendComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DragulaModule,
    FlexLayoutModule,
    SharedModule,
    ScrollbarModule
  ],
  declarations: [UI_COMPONENTS],
  exports: UI_COMPONENTS,
  providers: [AuthActions, SidebarActions]
})
export class SideBarModule {}
