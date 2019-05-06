import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {
  MatIconRegistry,
  MatTableDataSource,
  MatSort
} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss']
})
export class ProfileMainComponent implements OnInit, AfterViewInit {
  userStatus: string;
  statusColor: string;
  option1 = {
    title: 'Список фильмов',
    id: 'chart1',
    chartH: 25,
    lineH: 5
  };
  option2 = {
    title: 'Список аниме',
    id: 'chart2',
    chartH: 25,
    lineH: 5
  };
  option3 = {
    title: 'Список мультфильмов',
    id: 'chart3',
    chartH: 25,
    lineH: 5
  };
  dataset1 = [600, 400, 250];
  dataset2 = [700, 250, 150];
  dataset3 = [400, 560, 50];

  /* Expansion panels for anime list and about page */
  animeListPanel = {
    isExpanded: true
  };

  aboutPanel = {
    isExpanded: true
  };

  /* Table columns */
  displayedColumns = [
    'number',
    'uploadDate',
    'updateDate',
    'evaluation',
    'name',
    'episodes',
    'status'
  ];
  dataSource = new MatTableDataSource(ANIME_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.userStatus = 'online';
    /* this.statusColor = '#43b581;'; */

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
    iconRegistry.addSvgIcon(
      'user-add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/User_plus.svg')
    );
    iconRegistry.addSvgIcon(
      'bubble',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/bubble.svg')
    );
    iconRegistry.addSvgIcon(
      'eye-blocked',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/eye-blocked.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'envelope',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/envelope.svg')
    );
    iconRegistry.addSvgIcon(
      'chart',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/stats-pie-chart.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'tweaks',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/equalizer.svg')
    );
    iconRegistry.addSvgIcon(
      'user',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/user.svg')
    );
    iconRegistry.addSvgIcon(
      'users',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/User_people.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'circle',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/circle.svg')
    );
    iconRegistry.addSvgIcon(
      'play',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/turntable-play.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'pause',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/turntable-pause.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'stop',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/turntable-stop.svg'
      )
    );
  }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.statusColor = '#43b581';
    }, 10);
    this.dataSource.sort = this.sort;
  }

  toggleStatus(status) {
    this.userStatus = status;

    switch (status) {
      case 'online':
        this.statusColor = '#43b581';
        break;
      case 'notActive':
        this.statusColor = '#faa61a';
        break;
      case 'notDisturb':
        this.statusColor = '#f04747';
        break;
      case 'invis':
        this.statusColor = '#bfbfbf';
        break;
      default:
        this.statusColor = '#43b581';
        break;
    }
  }

  /* Table filter */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface IAnimeList {
  number: number;
  uploadDate: string;
  updateDate: string;
  evaluation: {
    overall: number;
    self: number;
  };
  name: string;
  episodes: {
    total: number;
    viewed: number;
  };
  status: string;
}

const ANIME_DATA: IAnimeList[] = [
  {
    number: 1,
    uploadDate: '12.03.2018',
    updateDate: '12.03.2018',
    evaluation: {
      overall: 7,
      self: 2
    },
    name: 'Name_1',
    episodes: {
      total: 200,
      viewed: 29
    },
    status: 'stop'
  },
  {
    number: 2,
    uploadDate: '24.02.2018',
    updateDate: '12.03.2018',
    evaluation: {
      overall: 5,
      self: 5
    },
    name: 'Name_2',
    episodes: {
      total: 40,
      viewed: 6
    },
    status: 'pause'
  },
  {
    number: 3,
    uploadDate: '01.01.2017',
    updateDate: '12.03.2018',
    evaluation: {
      overall: 2,
      self: 5
    },
    name: 'Name_3',
    episodes: {
      total: 130,
      viewed: 119
    },
    status: 'play'
  }
];
