import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private alertService: AlertService) {
    iconRegistry.addSvgIcon(
      'vk',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/resource-vkontakte.svg'));
    iconRegistry.addSvgIcon(
      'googleplus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/resource-googleplus.svg'));
    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/resource-twitter.svg'));
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/resource-facebook.svg'));
    iconRegistry.addSvgIcon(
      'steam',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/resource-steam.svg'));
    iconRegistry.addSvgIcon(
      'telegram',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/resource-telegram.svg'));
    iconRegistry.addSvgIcon(
      'youtube',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/resource-youtube.svg'));
    iconRegistry.addSvgIcon(
      'discord',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/resource-Discord.svg'));
  }

  ngOnInit() {
  }

  showAlert() {
    this.alertService.showNoPage();
  }

}
