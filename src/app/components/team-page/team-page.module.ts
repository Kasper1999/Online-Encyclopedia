import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamPageRoutingModule } from './team-page-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TeamPageComponent } from './team-page.component';

@NgModule({
  imports: [CommonModule, SharedModule, TeamPageRoutingModule],
  declarations: [TeamPageComponent]
})
export class TeamPageModule {}
