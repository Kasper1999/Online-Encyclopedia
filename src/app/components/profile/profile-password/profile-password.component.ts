import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-password',
  templateUrl: './profile-password.component.html',
  styleUrls: ['./profile-password.component.scss']
})
export class ProfilePasswordComponent implements OnInit {
  passForm: FormGroup = null;

  constructor(fb: FormBuilder) {
    this.passForm = fb.group({
      oldPass: [''],
      newPass: [''],
      repeatPass: ['']
    });
  }

  ngOnInit() {}
}
