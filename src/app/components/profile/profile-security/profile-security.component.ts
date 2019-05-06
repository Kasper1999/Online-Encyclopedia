import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-security',
  templateUrl: './profile-security.component.html',
  styleUrls: ['./profile-security.component.scss']
})
export class ProfileSecurityComponent {
  securityData: any[];

  constructor() {
    this.securityData = [
      {
        session: {
          title: 'Ваш текущий сеанс Firefox на Windows 7 ...',
          iconPath: '../assets/img/main/monitor-white.svg',
          info: {
            address: 'Belarus, Minsk',
            ip: '00000000',
            startDate: '24 декабря 2015'
          }
        }
      },
      {
        session: {
          title: 'Ваш текущий сеанс Firefox на Windows 7 ...',
          iconPath: '../assets/img/main/mobile-white.svg',
          info: {
            address: 'Belarus, Minsk',
            ip: '00000000',
            startDate: '24 декабря 2015'
          }
        }
      }
    ];
  }
}
