import { Component, OnInit } from '@angular/core';
declare let d3: any;

import { Data } from './sunburst-data';

@Component({
  selector: 'app-d3-sunburst',
  templateUrl: './d3-sunburst.component.html',
  styleUrls: ['./d3-sunburst.component.scss']
})
export class D3SunburstComponent implements OnInit {
  options;
  data;
  ngOnInit() {
    this.options = {
      chart: {
        type: 'sunburstChart',
        height: 350,
        margin : {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10
        },
      }
    };
    this.data = Data;
  }
}
