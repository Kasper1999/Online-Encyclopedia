import { Component, OnInit, Input } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-content-slider',
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.scss']
})
export class ContentSliderComponent implements OnInit {
  contentItems: GalleryItem[];
  @Input() contentData;

  constructor() {}

  ngOnInit() {
    this.contentItems = this.contentData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
  }

}
