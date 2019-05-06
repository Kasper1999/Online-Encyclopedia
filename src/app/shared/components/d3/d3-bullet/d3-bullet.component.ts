import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-d3-bullet',
    templateUrl: './d3-bullet.component.html',
    styleUrls: ['./d3-bullet.component.scss']
})
export class D3BulletComponent implements OnInit {
    @Input() data: any[];
    /* the dataset array must have 3 numbers [
        number for the first section,
        number for the 2nd section,
        number for the 3rd section
    ] */
    @Input() option;
    /* the option object must have the following properties
        {
            title: '', string
            id: '', string ( also this id should be added as a class for the chart component )
            chartH: , number
            lineH: number
    }
    */
    containerEl;
    svg;
    oneThird;
    ngOnInit() {
        window.addEventListener('resize', this.chartRender.bind(this));
        this.containerEl = document.querySelector('.' + this.option.id + ' div').clientWidth;
        this.oneThird = this.containerEl / 3;
        d3.select('.' + this.option.id + ' div').attr('style', 'height: ' + this.option.chartH + 'px');
        this.svg = d3.select('.' + this.option.id + ' div svg')
            .attr('style', 'vertical-align: bottom;')
            .attr('height', this.option.chartH)
            .attr('width', this.containerEl);
        this.svg.append('g')
            .attr('class', 'backChartColor')
            .selectAll('rect')
            .data(this.data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => {
                return i * this.oneThird;
            })
            .attr('y', 0)
            .attr('width', this.oneThird)
            .attr('height', this.option.chartH)
            .attr('fill', (d, i) => {
                const color = ['#6F367F', '#267F6F', '#3e61a3'];
                return color[i];
            });
        this.svg.append('g')
            .attr('class', 'backLineColor')
            .selectAll('rect')
            .data(this.data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => {
                return i * this.oneThird;
            })
            .attr('y', this.option.chartH - this.option.lineH)
            .attr('width', this.oneThird)
            .attr('height', this.option.lineH)
            .attr('fill', (d, i) => {
                const color = ['#67107F', '#5AFFB3', '#5E96FF'];
                return color[i];
            });
        this.svg.select('.backLineColor').selectAll('text')
            .data(this.data)
            .enter()
            .append('text')
            .text(d => d)
            .attr('text-anchor', 'end')
            .attr('x', (d, i) => (i + 1) * this.oneThird - 5)
            .attr('y', this.option.chartH - this.option.lineH - 3)
            .attr('style', 'fill:#fff;font-size:15px;');
        this.svg.append('g')
            .attr('class', 'lineColor')
            .selectAll('rect')
            .data(this.data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => {
                return i * this.oneThird;
            })
            .attr('y', this.option.chartH - this.option.lineH)
            .attr('width', (d, i) => {
                return this.oneThird * (d / this.data.reduce((a, b) => a + b, 0));
            })
            .attr('height', this.option.lineH)
            .attr('fill', (d, i) => {
                const color = ['#DE6DFF', '#ABFFF5', '#AAC8FF'];
                return color[i];
            });
        this.svg
            .append('text')
            .text(this.option.title)
            .attr('x', 5)
            .attr('y', this.option.chartH - this.option.lineH - 3)
            .attr('style', 'fill:#fff;font-size:15px;');
    }
    chartRender() {
        this.containerEl = document.querySelector('.' + this.option.id + ' div').clientWidth;
        this.oneThird = this.containerEl / 3;
        this.svg
            .attr('width', this.containerEl);
        this.svg.selectAll('.backLineColor text')
            .attr('x', (d, i) => (i + 1) * this.oneThird - 5);
        this.svg.selectAll('.backChartColor rect')
            .attr('x', (d, i) => {
                return i * this.oneThird;
            })
            .attr('width', this.oneThird);
        this.svg.selectAll('.backLineColor rect')
            .attr('x', (d, i) => {
                return i * this.oneThird;
            })
            .attr('width', this.oneThird);
        this.svg.selectAll('.lineColor rect')
            .attr('x', (d, i) => {
                return i * this.oneThird;
            })
            .attr('width', (d, i) => {
                return this.oneThird * (d / this.data.reduce((a, b) => a + b, 0));
            });
    }
}
