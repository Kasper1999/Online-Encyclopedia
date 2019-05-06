import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-small-frame',
  templateUrl: './small-frame.component.html',
  styleUrls: ['./small-frame.component.scss']
})
export class SmallFrameComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private alertService: AlertService) {
    iconRegistry.addSvgIcon(
      'fire',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/Fire.svg'));
    iconRegistry.addSvgIcon(
      'stats-bars',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/stats-bars.svg'));
    iconRegistry.addSvgIcon(
      'eye',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/eye.svg'));
    iconRegistry.addSvgIcon(
      'bubble',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/bubble.svg'));
  }

  ngOnInit() {
  }

  showAlert() {
    this.alertService.showNoPage();
  }

}
