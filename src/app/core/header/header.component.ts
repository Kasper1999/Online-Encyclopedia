import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { LiveBackgroundService } from '../services/live-background.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private liveBackgroundService: LiveBackgroundService
  ) {
    iconRegistry.addSvgIcon(
      'main-logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/wth_v2.svg')
    );
  }

  ngOnInit() {
    this.liveBackgroundService.backgroundInit();
  }
}
