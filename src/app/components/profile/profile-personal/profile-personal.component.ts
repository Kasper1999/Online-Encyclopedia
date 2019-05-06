import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import * as location from './location';

@Component({
  selector: 'app-profile-personal',
  templateUrl: './profile-personal.component.html',
  styleUrls: ['./profile-personal.component.scss']
})
export class ProfilePersonalComponent implements OnInit, OnDestroy {
  public profileForm: FormGroup = null;
  public sites: FormArray;
  public emails: FormArray;
  startDate = new Date(1990, 0, 1); // datepicker start date for birthday

  @ViewChild('countrySelect') public countrySelect;

  /* Limit on the maximum number of sites and mail addresses for the user */
  emailsCount: number;
  sitesCount: number;

  countriesList = [];
  citiesList = [];
  cities = [];
  countryIndex: number;

  constructor(private fb: FormBuilder) {
    this.profileForm = fb.group({
      nsfw: [false, []],
      name: ['', []],
      nickname: ['', [Validators.required, Validators.minLength(5)]],
      surname: ['', []],
      gender: ['', []],
      birthday: ['', []],
      country: ['', []],
      city: ['', []],
      emails: this.fb.array([this.createEmail()]),
      sites: this.fb.array([this.createSite()]),
      skype: ['', []],
      twitter: ['', []],
      instagram: ['', []],
      facebook: ['', []],
      vk: ['', []],
      discord: ['', []]
    });
    this.countriesList = location.country_arr;
    this.citiesList = location.s_a;
    this.emailsCount = 0;
    this.sitesCount = 0;
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.emailsCount = 0;
    this.sitesCount = 0;
    this.cities = [];
  }

  selectLocation() {
    this.cities = [];
    /* Get the index of the country selected by the user in the template */
    this.countryIndex = this.countriesList.findIndex(
      country => country === this.countrySelect.value
    );
    /* Fill in an array of cities depending on the country's index */
    const city_arr = this.citiesList[this.countryIndex + 1].split('|');

    for (const i of city_arr) {
      this.cities.push(i);
    }
  }

  createEmail(): FormGroup {
    return this.fb.group({
      email: ['', []]
    });
  }

  addEmail(): void {
    this.emailsCount++; // Max amount: 10 records
    this.emails = this.profileForm.get('emails') as FormArray;
    this.emails.push(this.createEmail());
  }

  removeEmail(i: number) {
    if (i === 0) {
      const controlArray = this.profileForm.get('emails') as FormArray;
      /* Making the form empty */
      controlArray.controls[0].get('email').setValue('');
      return;
    }
    this.emailsCount--;
    const emailsArr = this.profileForm.controls.emails as FormArray;
    emailsArr.removeAt(i);
  }

  createSite(): FormGroup {
    return this.fb.group({
      site: ['', []]
    });
  }

  addSite(): void {
    this.sitesCount++; // Max amount: 10 records
    this.sites = this.profileForm.get('sites') as FormArray;
    this.sites.push(this.createSite());
  }

  removeSite(i: number) {
    if (i === 0) {
      const controlArray = this.profileForm.get('sites') as FormArray;
      /* Making the form empty */
      controlArray.controls[0].get('site').setValue('');
      return;
    }
    this.sitesCount--;
    const siteArr = this.profileForm.controls.sites as FormArray;
    siteArr.removeAt(i);
  }

  removeControl(control: string) {
    this.profileForm.controls[control].setValue('');
  }

  onProfileSubmit() {}
}
