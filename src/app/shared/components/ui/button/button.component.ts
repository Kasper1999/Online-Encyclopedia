import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() type: string;

  btnColor: string;
  btnBackColor: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    switch (this.type) {
      case 'primary': {
        this.btnBackColor = '#00A74D';
        this.btnColor = '#ffffff';
      }
        break;
      case 'secondary': {
        this.btnBackColor = '#202020';
        this.btnColor = '#ffffff';
      }
        break;
      case 'tertiary': {
        this.btnBackColor = '#f4c430';
        this.btnColor = '#000000';
      }
        break;
      default: {this.btnBackColor = '#202020'; }
        break;
    }
  }

}
