import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {
  articleStatus: string;
  languageIconType: string;
  favoriteAnime: boolean;

  /* Gallery temporary images */
  public mainSliderImg = [
    {
      srcUrl:
        'http://www.anime-evo.net/wp-content/uploads/2014/08/P4GA_05_2.jpg',
      previewUrl:
        'http://www.anime-evo.net/wp-content/uploads/2014/08/P4GA_05_2.jpg'
    },
    {
      srcUrl:
        'http://www.anime-evo.net/wp-content/uploads/2014/09/P4GA_11_2.jpg',
      previewUrl:
        'http://www.anime-evo.net/wp-content/uploads/2014/09/P4GA_11_2.jpg'
    },
    {
      srcUrl:
        'http://assets1.ignimgs.com/2014/06/27/persona-4-the-animation-20-large-07jpg-6e4f14_1280w.jpg',
      previewUrl:
        'http://assets1.ignimgs.com/2014/06/27/persona-4-the-animation-20-large-07jpg-6e4f14_1280w.jpg'
    },
    {
      srcUrl: 'https://pp.userapi.com/c840533/v840533670/57cf8/kOvbFX_lxqs.jpg',
      previewUrl:
        'https://pp.userapi.com/c840533/v840533670/57cf8/kOvbFX_lxqs.jpg'
    },
    {
      srcUrl:
        'http://overencumbrance.files.wordpress.com/2014/08/persona-4-6-3.jpg',
      previewUrl:
        'http://overencumbrance.files.wordpress.com/2014/08/persona-4-6-3.jpg'
    }
  ];

  public coverSliderImg = [
    {
      srcUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71pROQwikqL._SL1365_.jpg',
      previewUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71pROQwikqL._SL1365_.jpg'
    },
    {
      srcUrl:
        'https://vignette.wikia.nocookie.net/megamitensei/images/2/29/Persona_4_Cover_1.png/revision/latest?cb=20150906184254',
      previewUrl:
        'https://vignette.wikia.nocookie.net/megamitensei/images/2/29/Persona_4_Cover_1.png/revision/latest?cb=20150906184254'
    }
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.articleStatus = 'Добавить';
    this.languageIconType = 'ru';
    this.favoriteAnime = false;

    iconRegistry.addSvgIcon(
      'archive',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/archive.svg')
    );
    iconRegistry.addSvgIcon(
      'compass',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/Compass.svg')
    );
    iconRegistry.addSvgIcon(
      'star',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/main/star.svg')
    );
    iconRegistry.addSvgIcon(
      'ru',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/RU.svg')
    );
    iconRegistry.addSvgIcon(
      'en',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/GB.svg')
    );
  }

  ngOnInit() {}

  toggleArticleStatus(status: string): void {
    this.articleStatus = status;
  }

  toggleLanguageIcon(languageIconType: string): void {
    languageIconType === 'en'
      ? (this.languageIconType = 'en')
      : (this.languageIconType = 'ru');
  }

  selectArticleFavorite(): void {
    this.favoriteAnime
      ? (this.favoriteAnime = false)
      : (this.favoriteAnime = true);
  }
}
