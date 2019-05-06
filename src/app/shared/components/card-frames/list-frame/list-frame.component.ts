import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-list-frame',
  templateUrl: './list-frame.component.html',
  styleUrls: ['./list-frame.component.scss']
})
export class ListFrameComponent implements OnInit {
  @Input() listFrameImg: string;
  @Input() listFrameArticle: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit aliquam alias\
   ut deserunt recusandae delectus soluta magni? Quaerat aspernatur harum autem reiciendis consequuntur qui sunt rerum dolores\
    cupiditate repellendus laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis distinctio rerum facilis\
     ea possimus dicta pariatur fuga quaerat voluptate aut laborum deleniti eaque debitis corporis excepturi inventore officiis\
      explicaboLorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit aliquam alias ut deserunt recusandae delectus\
       soluta magni? Quaerat aspernatur harum autem reiciendis consequuntur qui sunt rerum dolores cupiditate repellendus laudantium.\
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis distinctio rerum facilis ea possimus dicta pariatur fuga\
         quaerat voluptate aut laborum deleniti eaque debitis corporis excepturi inventore officiis explicabo';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private alertService: AlertService) {
    iconRegistry.addSvgIcon(
      'fire',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/Fire.svg'));
    iconRegistry.addSvgIcon(
      'stats-bars',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/stats-bars.svg'));
    iconRegistry.addSvgIcon(
      'eye',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/eye.svg'));
    iconRegistry.addSvgIcon(
      'bubble',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/bubble.svg'));
  }

  ngOnInit() {
  }

  showAlert() {
    this.alertService.showNoPage();
  }
}
