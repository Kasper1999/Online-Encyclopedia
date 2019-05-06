import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-profile-privacy',
  templateUrl: './profile-privacy.component.html',
  styleUrls: ['./profile-privacy.component.scss']
})
export class ProfilePrivacyComponent implements OnInit {
	constructor(private alertService: AlertService) {}
	userGroups = [
		'Все пользователи',
		'Только я',
		'Друзья',
		'Друзья и друзья друзей',
		'Определенные списки друзей',
		'Определенные друзья'
	];
	userGroups2 = [
		'Всем',
		'Только пользователям WTH',
		'Всем кроме поисковых ботов'
	];
	
	checked={'hide':false};
	checked2={'hide':false};

	onChange(value){
		this.checked.hide=value.checked;
	}
	onChange2(value){
		this.checked2.hide=value.checked;
	}
	ngOnInit() {}

	showAlert() {
    		this.alertService.showNoPage();
  	}

}
