import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import * as tooltips from '../main-page-tooltips';

@Component({
  selector: 'app-catalogs-panel',
  templateUrl: './catalogs-panel.component.html',
  styleUrls: ['./catalogs-panel.component.scss']
})
export class CatalogsPanelComponent {
  tooltipType: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'plus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/plus.svg'));
    iconRegistry.addSvgIcon(
      'minus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/minus.svg'));

    iconRegistry.addSvgIcon(
      'chevron-right',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/chevron-right.svg'));
    iconRegistry.addSvgIcon(
      'chevron-down',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/chevron-down.svg'));
  }

  anime: any = {
    title: 'Аниме',
    isExpanded: false,
    content: [{
      title: 'Кодомо',
      isEnabled: false,
      selector: '',
      isSpecialGenre: true,
      subgenres: []
    }, {
      title: 'Сёнэн',
      isEnabled: false,
      selector: '',
      isSpecialGenre: true,
      subgenres: []
    }, {
      title: 'Сэйнэн',
      isEnabled: false,
      selector: '',
      isSpecialGenre: true,
      subgenres: []
    }, {
      title: 'Дзёсэй',
      isEnabled: false,
      selector: '',
      isSpecialGenre: true,
      subgenres: []
    }, {
      title: 'Меха',
      isEnabled: false,
      selector: '',
      isSpecialGenre: false,
      subgenres: []
    }, {
      title: 'Самурайский боевик',
      isEnabled: false,
      selector: '',
      isSpecialGenre: false,
      subgenres: []
    }, {
      title: 'Добуцу',
      isEnabled: false,
      selector: '',
      isSpecialGenre: false,
      subgenres: []
    }, {
      title: 'Идолы',
      isEnabled: false,
      selector: '',
      isSpecialGenre: false,
      subgenres: []
    }, {
      title: 'Отаку',
      isEnabled: false,
      selector: '',
      isSpecialGenre: false,
      subgenres: []
    }, {
      title: 'Этти',
      isEnabled: false,
      selector: '',
      isSpecialGenre: false,
      subgenres: []
    }, {
      title: 'Хентай',
      isEnabled: true,
      selector: '',
      isSpecialGenre: false,
      subgenres: [{
        title: 'Юри',
        isEnabled: false,
        selector: '',
      }, {
        title: 'Сётакон',
        isEnabled: false,
        selector: '',
      }, {
        title: 'Лоликон',
        isEnabled: false,
        selector: '',
      }]
    }, {
      title: 'Сёдзё-ай',
      isEnabled: false,
      selector: '',
      isSpecialGenre: false,
      subgenres: []
    }, {
      title: 'Сёнэн-ай',
      isEnabled: false,
      selector: '',
      isSpecialGenre: false,
      subgenres: []
    }, {
      title: 'Школа',
      isEnabled: false,
      selector: '',
      isSpecialGenre: false,
      subgenres: []
    }, {
      title: 'Гарем',
      isEnabled: false,
      selector: '',
      isSpecialGenre: false,
      subgenres: []
    }],
  };

  films: any = {
    title: 'Фильмы',
    isExpanded: false,
    content: [{
      title: 'Боевик',
      isEnabled: false,
      selector: '',
      isExpanded: false,
      subgenres: []
    }, {
      title: 'Фэнтези',
      isEnabled: false,
      selector: '',
      isExpanded: false,
      subgenres: []
    }, {
      title: 'Романтика',
      isEnabled: false,
      selector: '',
      isExpanded: false,
      subgenres: []
    }, {
      title: 'Драма',
      isEnabled: false,
      selector: '',
      isExpanded: false,
      subgenres: []
    }],
  };

  cartoons: any = {
    isExpanded: false,
    title: 'Мультфильмы',
    content: [],
  };

  catalogs: any = [
    this.films,
    this.anime,
    this.cartoons
  ];

  getTooltip(title: string, panelType: string) {
    if (panelType === 'Аниме') {
      return tooltips.animeTooltips[title];
    } else if (panelType === 'Фильмы') {
      return;
    } else if (panelType === 'Мультфильмы') {
      return;
    }
  }

  changeSelector(catalog: any, selector: string, gIndex: number, subgIndex: number = null): void {
    let catalogTitle;

    if (catalog.title === 'Аниме') {
      catalogTitle = this.anime;
    } else if (catalog.title === 'Фильмы') {
      catalogTitle = this.films;
    } else if (catalog.title === 'Мультфильмы') {
      catalogTitle = this.cartoons;
    }

    switch (selector) {
      case 'plus': {
        if (subgIndex === null) {
          catalogTitle.content[gIndex].selector = 'minus';
        } else {
          this.anime.content[gIndex].subgenres[subgIndex].selector = 'minus';
        }
        break;
      }
      case 'minus': {
        if (subgIndex === null) {
          catalogTitle.content[gIndex].selector = '';
        } else {
          this.anime.content[gIndex].subgenres[subgIndex].selector = '';
        }
        break;
      }

      case '': {
        if (subgIndex === null) {
          catalogTitle.content[gIndex].selector = 'plus';
        } else {
          this.anime.content[gIndex].subgenres[subgIndex].selector = 'plus';
        }
        break;
      }
    }
  }
}
