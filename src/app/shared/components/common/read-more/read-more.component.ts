import { Component, AfterViewInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements AfterViewInit {
    // the text that need to be put in the container
    @Input() text: string;

    // maximum height of the container
    @Input() maxHeight: number;

    // set these to false to get the height of the expended container
    public isCollapsed: boolean;
    public isCollapsable: boolean;

    constructor(private elementRef: ElementRef) {
      this.maxHeight = 100;
      this.isCollapsed = false;
      this.isCollapsable = false;
    }

    ngAfterViewInit() {
        const currentHeight = this.elementRef.nativeElement.getElementsByTagName('div')[0].offsetHeight;
       // collapsable only if the contents make container exceed the max height
       setTimeout(() => {
        if (currentHeight > this.maxHeight) {
            this.isCollapsed = true;
            this.isCollapsable = true;
        }
       }, 1);
    }
}
