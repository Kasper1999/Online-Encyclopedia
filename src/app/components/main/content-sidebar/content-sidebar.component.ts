import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content-sidebar',
  templateUrl: './content-sidebar.component.html',
  styleUrls: ['./content-sidebar.component.scss']
})
export class ContentSidebarComponent implements OnInit {
  statusPanel = {
    isExpanded: false,
    title: 'Добавить',
    color: '#00a74d'
  };

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'check-empty-',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/check-empty -.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'check-empty+',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/check-empty +.svg'
      )
    );
  }

  ngOnInit() {}

  toggleAnimeStatus(status: string): void {
    switch (status) {
      case 'viewed': {
        this.statusPanel.title = 'Просмотренное';
        this.statusPanel.color = '#ae63e4';
        this.statusPanel.isExpanded = false;
        break;
      }
      case 'break': {
        this.statusPanel.title = 'Брошено';
        this.statusPanel.color = '#ae63e4';
        this.statusPanel.isExpanded = false;
        break;
      }
      case 'watch': {
        this.statusPanel.title = 'Смотрю';
        this.statusPanel.color = '#ae63e4';
        this.statusPanel.isExpanded = false;
        break;
      }
      case 'reviewing': {
        this.statusPanel.title = 'Пересматриваю';
        this.statusPanel.color = '#ae63e4';
        this.statusPanel.isExpanded = false;
        break;
      }
      case 'defer': {
        this.statusPanel.title = 'Отложено';
        this.statusPanel.color = '#ae63e4';
        this.statusPanel.isExpanded = false;
        break;
      }
      case 'plan': {
        this.statusPanel.title = 'Запланировано';
        this.statusPanel.color = '#ae63e4';
        this.statusPanel.isExpanded = false;
        break;
      }
      case 'delete': {
        this.statusPanel.title = 'Добавить';
        this.statusPanel.color = '#00a74d';
        this.statusPanel.isExpanded = false;
        break;
      }
      default: {
        this.statusPanel.title = 'Добавить';
        this.statusPanel.color = '#00a74d';
        this.statusPanel.isExpanded = false;
        break;
      }
    }
  }
}
