import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { MaterialModule } from '../shared/material.module';

import { SideBarModule } from './side-bar/side-bar.module';
import { HeaderComponent } from './header/header.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LiveBackgroundService } from './services/live-background.service';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { AlertService } from './services/alert.service';
import { ValidateService } from './services/validate.service';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';

@NgModule({
  imports: [CommonModule, RouterModule, SideBarModule, MaterialModule],
  exports: [HeaderComponent, NotFoundPageComponent, SideBarModule],
  declarations: [
    HeaderComponent,
    NotFoundPageComponent,
    ConfirmationPageComponent
  ],
  providers: [
    LiveBackgroundService,
    AlertService,
    AuthService,
    StorageService,
    ValidateService
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
