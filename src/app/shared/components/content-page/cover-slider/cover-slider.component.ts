import { Component, OnInit, Input } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-cover-slider',
  templateUrl: './cover-slider.component.html',
  styleUrls: ['./cover-slider.component.scss']
})
export class CoverSliderComponent implements OnInit {
  coverItems: GalleryItem[];
  @Input() coverData;

  constructor() {}

  ngOnInit() {
    this.coverItems = this.coverData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
  }
}
