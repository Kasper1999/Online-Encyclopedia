import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer, DOCUMENT } from '@angular/platform-browser';
import 'scrollport-js';
declare let $: any;

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent implements OnInit {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document
  ) {
    iconRegistry.addSvgIcon(
      'chevronDown',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/chevron-down.svg'
      )
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateScrollState(window.pageYOffset);
  }

  yOffset: number = 0;
  offsetCount: number = 0;
  savedOffset: number = 0;

  updateScrollState(yOffset: number) {
    this.yOffset = yOffset;
    this.offsetCount = Math.floor(yOffset / 1000);
  }

  handleScroll() {
    if (this.yOffset <= 600) {
      if (this.savedOffset > 0) {
        $.scrollport(this.savedOffset);
        // window.scrollTo(0, this.savedOffset);
      } else {
        const { bottom } = this.document
          .querySelector('.main__content')
          .getBoundingClientRect();

        $.scrollport(bottom);
        // window.scrollTo(0, bottom);
      }
      this.savedOffset = 0;
    } else {
      this.savedOffset = this.yOffset;
      $.scrollport(0);
      // window.scrollTo(0, 0);
    }
  }

  handleOnBadge(ev) {
    ev.stopPropagation();
    if (this.offsetCount === 0) {
      return;
    }
    this.savedOffset = this.yOffset;
    $.scrollport((this.offsetCount - 1) * 1000);
    // window.scrollTo(0, (this.offsetCount - 1) * 1000);
  }

  ngOnInit() {}
}
