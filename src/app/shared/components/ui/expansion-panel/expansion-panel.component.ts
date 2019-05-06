import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {
  @Input() panelTitle: string;
  @Input() panelSubtitle: string;
  @Input() panelExpanded: boolean; // Panel open/closed
  @Input() panelIcon: string;

  /* Panel styles */
  @Input() panelStyle: string;

  @Output() panelIsOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  /* Panel open/close icons */
  triggerIcon: ITriggerIcon = {
    openIcon: null,
    closeIcon: null
  };

  /* EXPANSION_PANEL_ANIMATION_TIMING */
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'check-empty-',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/check-empty -.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'check-empty+',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/main/check-empty +.svg'
      )
    );
  }

  ngOnInit() {
    this.setTriggerIcon();
  }

  setTriggerIcon() {
    switch (this.panelIcon) {
      case 'plus': {
        this.triggerIcon.openIcon = 'check-empty-';
        this.triggerIcon.closeIcon = 'check-empty+';
        break;
      }
      default: {
        break;
      }
    }
  }
}

export interface ITriggerIcon {
  openIcon: string;
  closeIcon: string;
}
