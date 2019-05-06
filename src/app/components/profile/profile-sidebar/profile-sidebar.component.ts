import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {
  constructor(private alertService: AlertService) {}

  ngOnInit() {}

  showAlert() {
    this.alertService.showNoPage();
  }
}
