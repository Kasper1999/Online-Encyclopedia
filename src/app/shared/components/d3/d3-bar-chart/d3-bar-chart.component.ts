import { Component, OnInit } from '@angular/core';

import { Data } from './d3-data';

@Component({
  selector: 'app-d3-bar-chart',
  templateUrl: './d3-bar-chart.component.html',
  styleUrls: ['./d3-bar-chart.component.scss']
})
export class D3BarChartComponent implements OnInit {
  data = Data;
  margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 25
    };

  width = 240 - this.margin.left - this.margin.right;
  height = 220 - this.margin.top - this.margin.bottom;


    ngOnInit() {
      const data = this.data;

      const svg = d3.select('#graphic').append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .style('fill', '#ffffff')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

      /* Create gradient */
      const svgDefs = svg.append('defs');
      const mainGradient = svgDefs.append('linearGradient')
        .attr('id', 'mainGradient');

        // Create the stops of the main gradient. Each stop will be assigned
        // a class to style the stop using CSS.
        mainGradient.append('stop')
            .attr('class', 'stop-left')
            .attr('offset', '0')
            .style('stop-color', '#545454');

        mainGradient.append('stop')
            .attr('class', 'stop-right')
            .attr('offset', '1')
            .style('stop-color', '#000000');

      const x = d3.scale.linear()
      .range([0, this.width - 65])
      .domain([0, d3.max(data, function (d) {
          return d.value;
      })]);

      const y = d3.scale.ordinal()
      .rangeRoundBands([this.height, 0], .1)
      .domain(data.map(function (d) {
          return d.name;
      }));

      // make y axis to show bar names
      const yAxis = d3.svg.axis()
      .scale(y)
      // no tick marks
      .tickSize(0)
      .orient('left');

      const gy = svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis);

      const bars = svg.selectAll('.bar')
      .data(this.data)
      .enter()
      .append('g');

      // append rects
      bars.append('rect')
      .attr('class', 'bar')
      .attr('y', function (d) {
          return y(d.name) + 2;
      })
      .attr('height', '15')
      .attr('x', 0)
      .attr('width', function (d) {
          return x(d.value);
      })
      .attr('style', 'fill: url(#mainGradient)!important;');

      // add a value label to the right of each bar
      bars.append('text')
      .attr('class', 'label')
      // y position of the label is halfway down the bar
      .attr('y', function (d) {
          return y(d.name) + y.rangeBand() / 2 + 4;
      })
      // x position is 3 pixels to the right of the bar
      .attr('x', function (d) {
          return x(d.value) + 3;
      })
      .text(function (d) {
          return d.value;
      });

    }
}
