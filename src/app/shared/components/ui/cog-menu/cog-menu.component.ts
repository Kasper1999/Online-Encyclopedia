import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cog-menu',
  templateUrl: './cog-menu.component.html',
  styleUrls: ['./cog-menu.component.scss']
})
export class CogMenuComponent implements OnInit {
  @Output() editTitle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() editDescription: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'cog',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/cog.svg'));
  }

  ngOnInit() {
  }

  onTitleEdit() {
    this.editTitle.emit();
  }

  onDecriptionEdit() {
    this.editDescription.emit();
  }

}
