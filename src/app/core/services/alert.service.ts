import { Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import swal from 'sweetalert2';
import {
  SnotifyService,
  SnotifyPosition,
  SnotifyToastConfig
} from 'ng-snotify';

@Injectable()
export class AlertService {
  snotifyPosition: SnotifyPosition = SnotifyPosition.rightBottom;

  snotifyProperties = {
    style: 'material',
    timeout: 4000,
    position: this.snotifyPosition,
    progressBar: true,
    closeClick: true,
    newTop: true,
    backdrop: 0,
    dockMax: 8,
    blockMax: 6,
    pauseHover: true,
    titleMaxLength: 15,
    bodyMaxLength: 80
  };

  /* Snotify gloabl configuration */
  private getConfig(): SnotifyToastConfig {
    this.snotifyService.setDefaults({
      global: {
        newOnTop: this.snotifyProperties.newTop,
        maxAtPosition: this.snotifyProperties.blockMax,
        maxOnScreen: this.snotifyProperties.dockMax
      }
    });
    return {
      bodyMaxLength: this.snotifyProperties.bodyMaxLength,
      titleMaxLength: this.snotifyProperties.titleMaxLength,
      backdrop: this.snotifyProperties.backdrop,
      position: this.snotifyProperties.position,
      timeout: this.snotifyProperties.timeout,
      showProgressBar: this.snotifyProperties.progressBar,
      closeOnClick: this.snotifyProperties.closeClick,
      pauseOnHover: this.snotifyProperties.pauseHover
    };
  }

  constructor(private snotifyService: SnotifyService) {}

  showNoPage() {
    swal({
      title: 'Oops!',
      text: 'Работаем над этим, будет доступно позже',
      type: 'warning',
      showConfirmButton: true,
      confirmButtonClass: 'mat-raised-button swal2-confirm',
      buttonsStyling: false,
      reverseButtons: true,
      footer:
        '<p style="text-align: center; margin: 0;">У вас есть вопросы? <br> \
        Пишите нам на <a href="support@wth.email">support@wth.email</a> в любое время!</p>'
    });
  }

  notificationSuccess(title: string, body: string) {
    this.snotifyService.success(body, title, this.getConfig());
  }
  notificationInfo(title: string, body: string) {
    this.snotifyService.info(body, title, this.getConfig());
  }
  notificationError(title: string, body: string) {
    this.snotifyService.error(body, title, this.getConfig());
  }
  notificationWarning(title: string, body: string) {
    this.snotifyService.warning(body, title, this.getConfig());
  }
}
