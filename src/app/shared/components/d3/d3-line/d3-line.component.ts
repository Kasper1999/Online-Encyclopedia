import { Component, OnInit } from '@angular/core';
declare let d3: any;

@Component({
  selector: 'app-d3-line',
  templateUrl: './d3-line.component.html',
  styleUrls: ['./d3-line.component.scss']
})
export class D3LineComponent implements OnInit  {
  options;
  data;

  ngOnInit() {
    this.data = sine();
    this.options = {
      chart: {
        type: 'sparklinePlus',
        height: 100,
        x: (d, i) =>  i ,
        xTickFormat: (d) => {
          // return d3.time.format('%a')(new Date(this.data[d].x) );
        },
        color: (d, i) => d.color,
        showMinMaxPoints: false,
        showCurrentPoint: false,
        width: 240,
        margin: {
          top: 15,
          right: 60,
          bottom: 10,
          left: 10
        },
        duration: 250,
        dispatch: {
          renderEnd: (d) => {
            d3.selectAll('.nvd3.nv-sparkline path')
              .attr('stroke', '#fff')
              .attr('stroke-width', 2);
          }
        }
      }
    };
   
    function sine() {
      let sin = [];
      let now: number = + new Date();

      for (let i = 0; i < 100; i++) {
          sin.push({x: now + i * 1000 * 60 * 60 * 24, y: Math.sin(i / 10), color: '#fff'});
      }

      return sin;
    }

    function volatileChart(startPrice, volatility, numPoints) {
      let rval =  [];
      let now = +new Date();
      numPoints = numPoints || 100;
      for ( let i = 1; i < numPoints; i++) {

          rval.push({x: now + i * 1000 * 60 * 60 * 24, y: startPrice});
          let rnd = Math.random();
          let changePct = 2 * volatility * rnd;
          if ( changePct > volatility) {
              changePct -= (2 * volatility);
          }
          startPrice = startPrice + startPrice * changePct;
      }
      return rval;
    }
  }
}
