import { Directive, HostListener, HostBinding, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {
  @Output() private filesDropEmiter: EventEmitter<FileList[]> = new EventEmitter();
  @HostBinding('style.border-color') private borderColor;

  constructor() {}

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.borderColor = '#E6008D';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.borderColor = null;
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.borderColor = '#E6008D';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.filesDropEmiter.emit(files);
    }
  }

}

/*  border: 3px dashed #E6008D; */
