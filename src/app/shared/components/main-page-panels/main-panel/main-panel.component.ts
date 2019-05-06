import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {
  @Output() toggleViewMode: EventEmitter<string> = new EventEmitter<string>();
  @Output() toggleSortMode: EventEmitter<string> = new EventEmitter<string>();

  panelFixed: boolean;

  defaultViewMode: string;
  viewModes = [
    'list-mode',
    'small-mode',
    'large-mode'
  ];

  defaultSortMode: string;
  sortModes = [
    'sort-alpha-asc',
    'sort-amount-desc',
    'sort-move-down',
    'sort-numberic-desc',
  ];

  panel: any = {
    isExpanded: true,
    title: 'Каталог',
  };

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private el: ElementRef) {
      this.defaultViewMode = 'list-mode';
      this.defaultSortMode = 'sort-alpha-asc';
      this.panelFixed = false;
    iconRegistry.addSvgIcon(
      'small-mode',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/th.svg'));
    iconRegistry.addSvgIcon(
      'list-mode',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/th-large.svg'));
    iconRegistry.addSvgIcon(
      'large-mode',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/th-list.svg'));

    iconRegistry.addSvgIcon(
      'sort-alpha-asc',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/sort-alpha-asc.svg'));
    iconRegistry.addSvgIcon(
      'sort-amount-desc',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/sort-amount-desc.svg'));
    iconRegistry.addSvgIcon(
      'sort-move-down',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/sort-move-down.svg'));
    iconRegistry.addSvgIcon(
      'sort-numberic-desc',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/sort-numberic-desc.svg'));

    iconRegistry.addSvgIcon(
      'plus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/plus.svg'));
    iconRegistry.addSvgIcon(
      'minus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/minus.svg'));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;

    const panelWidth =  this.el.nativeElement.offsetWidth;

    if ( scrollOffset > 100 ) {
        this.panelFixed = true;
    } else if (scrollOffset  < 100) {
        this.panelFixed = false;
    }
  }

  ngOnInit() {
  }

  toggleView(mode: string): void {
    this.toggleViewMode.emit(mode);
    const listMode = (<HTMLInputElement>document.getElementById('list-mode'));
    const smallMode = (<HTMLInputElement>document.getElementById('small-mode'));
    const largeMode = (<HTMLInputElement>document.getElementById('large-mode'));

    /* Toggle icon color */
    switch (mode) {
      case 'list-mode':
        listMode.checked = true;
        break;
      case 'small-mode':
        smallMode.checked = true;
        break;
      case 'large-mode':
        largeMode.checked = true;
        break;
      default:
        break;
    }
  }

  toggleSort(mode: string): void {
    this.toggleSortMode.emit(mode);
    const alphaAsc = (<HTMLInputElement>document.getElementById('sort-alpha-asc'));
    const amountDesc = (<HTMLInputElement>document.getElementById('sort-amount-desc'));
    const moveDown = (<HTMLInputElement>document.getElementById('sort-move-down'));
    const numbericDesc = (<HTMLInputElement>document.getElementById('sort-numberic-desc'));

    /* Toggle icon color */
    switch (mode) {
      case 'sort-alpha-asc':
        alphaAsc.checked = true;
        break;
      case 'sort-amount-desc':
        amountDesc.checked = true;
        break;
      case 'sort-move-down':
        moveDown.checked = true;
        break;
      case 'sort-numberic-desc':
        numbericDesc.checked = true;
        break;
      default:
        break;
    }
  }

}
