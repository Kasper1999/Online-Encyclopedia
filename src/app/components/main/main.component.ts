import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  array = [];
  sum = 8;
  throttle = 1000;
  scrollDistance = 0;
  direction = '';
  asideOpened = false;

  defaultViewMode: string;

  constructor() {
    this.defaultViewMode = 'list-mode';
    this.addItems();
  }

  toggleMode(emit: string) {
    this.defaultViewMode = emit;
  }

  addItems() {
    for (let i = 0; i < this.sum; ++i) {
      this.array.push(i);
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems();
  }

  onScrollDown(ev) {
    // add another items
    this.sum += 1;
    this.addItems();

    this.direction = 'down';
  }
  asideToggle() {
    this.asideOpened = false;
  }
}
