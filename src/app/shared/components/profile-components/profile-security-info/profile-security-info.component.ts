import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-security-info',
  templateUrl: './profile-security-info.component.html',
  styleUrls: ['./profile-security-info.component.scss']
})
export class ProfileSecurityInfoComponent implements OnInit {
  @Input() infoData: any[];

  constructor() { }

  ngOnInit() {
  }

}
