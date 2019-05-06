import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { MainComponent } from './main.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { ContentSidebarComponent } from './content-sidebar/content-sidebar.component';
import { FullInfoComponent } from './full-info/full-info.component';

@NgModule({
  imports: [CommonModule, MainRoutingModule, SharedModule],
  declarations: [MainComponent, ContentSidebarComponent, ContentPageComponent,FullInfoComponent]
})
export class MainModule {}
