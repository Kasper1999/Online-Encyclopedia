import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { AngularCropperjsComponent } from 'angular-cropperjs';

import Helpers from '../../../../shared/tools/helpers';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  uploaderShow: boolean;
  loading: boolean;
  croppedImg: string;
  error: string;
  imageMaxSize: number;
  data: any;

  cropperOptions = {
    rotatable: true,
    minCropBoxWidth: 100,
    minCropBoxHeight: 100,
    minCanvasWidth: 200,
    minCanvasHeight: 200,
    minContainerWidth: 200,
    minContainerHeight: 200,
    highlight: false,
    cropBoxMovable: true,
    cropBoxResizable: true
  };

  @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;

  /* Angular Cropper settings */
  imageUrl: any = new Image();

  constructor() {
    this.uploaderShow = true;
    this.loading = false;
    this.error = '';
    this.data = {};
    this.imageMaxSize = 10;
  }

  ngOnInit() {}

  onChange($event) {
    let files = [];
    let file: File;
    let fileName: string;

    this.loading = true;
    this.uploaderShow = false;

    /* If $event.target === undefined this mean that we are use drag&drop image upload */
    if ($event.target === undefined) {
      file = $event[0];
      fileName = file.name;
    } else {
      files = $event.target.files;
      file = files[0];
      fileName = file.name;
    }

    const fileSize = file.size;
    const ext = Helpers.getFileExt(fileName);

    const allwdExtns = /png|jpg|jpeg/i;

    if (!ext || !allwdExtns.test(ext)) {
      this.error = 'Недопустимый формат файла \'' + ext + '\'.';
      this.reset();
      return false;
    }

    if (!fileSize || fileSize > this.imageMaxSize * 1024 * 1024) {
      this.error = 'Размер файла превышает максимально допустимый размер ' + this.imageMaxSize + 'Mb';
      this.reset();
      return false;
    }

    const myReader: FileReader = new FileReader();

    myReader.onloadend = (loadEvent: any) => {
      this.imageUrl = myReader.result;
    };

    myReader.readAsDataURL(file);
    this.loading = false;
  }

  onSave() {
    const ts = Math.ceil(new Date().getTime() / 1000);
    const blob = Helpers.dataURItoBlob(this.imageUrl);

    const ext = blob.type.match(/\/[0-9a-z]+$/i)[0].slice(1);
    const file = new File( [blob], 'blobImage_' + ts + '.' + ext, { type: blob.type } );
    this.error = '';
    this.loading = true;
  }

  rotate(side: string) {
    switch (side) {
      case 'right':
        this.angularCropper.cropper.rotate(45);
        break;
      case 'left':
        this.angularCropper.cropper.rotate(-45);
        break;
      default: return;
    }
  }

  reset() {
    this.imageUrl = '';
    this.uploaderShow = true;
    this.loading = false;
  }

}
