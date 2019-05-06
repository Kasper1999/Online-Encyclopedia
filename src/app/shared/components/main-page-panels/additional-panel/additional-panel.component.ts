import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import * as tooltips from '../main-page-tooltips';

@Component({
  selector: 'app-additional-panel',
  templateUrl: './additional-panel.component.html',
  styleUrls: ['./additional-panel.component.scss']
})
export class AdditionalPanelComponent implements OnInit {
  @Input() formatType: string;
  tooltipType: string;

  panelType: any = {};

  formats: any = {
    isExpanded: false,
    title: 'Формат',
    content: [{
      title: 'Короткометражный фильм',
      isEnabled: false,
      isSpecialGenre: true,
      selector: '',
    }, {
      title: 'Полнометражный фильм',
      isEnabled: false,
      isSpecialGenre: true,
      selector: '',
    }, {
      title: 'Сериал',
      isEnabled: false,
      isSpecialGenre: true,
      selector: '',
    }, {
      title: 'Документальное кино',
      isEnabled: false,
      isSpecialGenre: true,
      selector: '',
    }, {
      title: 'Научно-популярный фильм',
      isEnabled: false,
      isSpecialGenre: true,
      selector: '',
    }, {
      title: 'Любительское кино',
      isEnabled: false,
      isSpecialGenre: true,
      selector: '',
    }, {
      title: 'TV',
      isEnabled: false,
      isSpecialGenre: false,
      selector: '',
    }, {
      title: 'OVA',
      isEnabled: false,
      isSpecialGenre: false,
      selector: '',
    }, {
      title: 'Фильм',
      isEnabled: false,
      isSpecialGenre: false,
      selector: '',
    }, {
      title: 'ONA',
      isEnabled: false,
      isSpecialGenre: false,
      selector: '',
    }, {
      title: 'Спешел',
      isEnabled: false,
      isSpecialGenre: false,
      selector: '',
    }, {
      title: 'Клип',
      isEnabled: false,
      isSpecialGenre: false,
      selector: '',
    }],
  };

  statuses: any = {
    isExpanded: false,
    title: 'Статус',
    content: [{
      title: 'Анонс',
      isEnabled: false,
      selector: '',
    }, {
      title: 'Онгоинг',
      isEnabled: false,
      selector: '',
    }, {
      title: 'Релиз',
      isEnabled: false,
      selector: '',
    }],
  };

  types: any = {
    isExpanded: false,
    title: 'Тип',
    content: [{
      title: 'Сиквел',
      isEnabled: false,
      selector: '',
    }, {
      title: 'Приквел',
      isEnabled: false,
      selector: '',
    }, {
      title: 'Интерквел',
      isEnabled: false,
      selector: '',
    }, {
      title: 'Мидквел',
      isEnabled: false,
      selector: '',
    }, {
      title: 'Пролог',
      isEnabled: false,
      selector: '',
    }, {
      title: 'Ремейк',
      isEnabled: false,
      selector: '',
    }, {
      title: 'Спин-офф',
      isEnabled: false,
      selector: '',
    }]
  };

  ratings: any = {
    isExpanded: false,
    title: 'Рейтинг',
    content: [{
      title: 'G',
      isEnabled: false,
      selector: '',
    }, {
      title: 'PG',
      isEnabled: false,
      selector: '',
    }, {
      title: 'PG-13',
      isEnabled: false,
      selector: '',
    }, {
      title: 'R',
      isEnabled: false,
      selector: '',
    }, {
      title: 'NC-17',
      isEnabled: false,
      selector: '',
    }],
  };

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'plus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/plus.svg'));
    iconRegistry.addSvgIcon(
      'minus',
    sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/minus.svg'));
    iconRegistry.addSvgIcon(
      'check-empty-',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/check-empty -.svg'));
    iconRegistry.addSvgIcon(
      'check-empty+',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/check-empty +.svg'));
  }

  ngOnInit() {
    switch (this.formatType) {
      case 'formats':
        this.panelType = this.formats;
        this.tooltipType = 'formatTooltips';
        break;
      case 'statuses':
        this.panelType = this.statuses;
        this.tooltipType = 'statusTooltips';
        break;
      case 'types':
        this.panelType = this.types;
        this.tooltipType = 'typeTooltips';
        break;
      case 'ratings':
        this.panelType = this.ratings;
        this.tooltipType = 'ratingTooltips';
        break;
    }
  }

  getTooltip(title: string): string {
    if (Object.keys(tooltips[this.tooltipType]).length === 0 && tooltips[this.tooltipType].constructor === Object) {
      return;
    }
    return tooltips[this.tooltipType][title];
  }

  changeSelector(panel: string, selector: string, index: number): void {
    let requiredPanel;

    if (panel === 'Формат') {
      requiredPanel = this.formats;
    } else if (panel === 'Статус') {
      requiredPanel = this.statuses;
    } else if (panel === 'Тип') {
      requiredPanel = this.types;
    } else if (panel === 'Рейтинг') {
      requiredPanel = this.ratings;
    }

    switch (selector) {
      case 'plus': {
        requiredPanel.content[index].selector = 'minus';
        break;
      }
      case 'minus': {
        requiredPanel.content[index].selector = '';
        break;
      }
      case '': {
        requiredPanel.content[index].selector = 'plus';
        break;
      }
    }
  }
}
