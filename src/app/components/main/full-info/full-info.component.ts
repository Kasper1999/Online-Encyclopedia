import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
    selector: 'app-full-info',
    templateUrl: './full-info.component.html',
    styleUrls: ['./full-info.component.scss']
})
export class FullInfoComponent implements OnInit {
    @Input() asideOpened: boolean;
    @Output() asideOpenedChange = new EventEmitter();
    @Output() sideNaveClose = new EventEmitter();
    imageData = [
        {
            srcUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Persona4GoldenCover.jpg/250px-Persona4GoldenCover.jpg',
            previewUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Persona4GoldenCover.jpg/250px-Persona4GoldenCover.jpg'
        },
        {
            srcUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Persona4GoldenCover.jpg/250px-Persona4GoldenCover.jpg',
            previewUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Persona4GoldenCover.jpg/250px-Persona4GoldenCover.jpg'
        }
    ];

    items: GalleryItem[];

    ngOnInit() {
        this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
    }
    asideToggle() {
        this.asideOpened = !this.asideOpened;
        this.asideOpenedChange.emit(this.asideOpened);
    }
    close() {
        this.sideNaveClose.emit(true);
    }
}
