import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
  year: number;
  iconType: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.year = new Date().getFullYear();
    this.iconType = 'ru';

    iconRegistry.addSvgIcon(
      'ru',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/RU.svg'));
    iconRegistry.addSvgIcon(
      'en',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/GB.svg'));
  }

  ngOnInit() {
  }

  toggleIcon(iconType) {
    iconType === 'en' ? this.iconType = 'en' : this.iconType = 'ru';
  }

}
