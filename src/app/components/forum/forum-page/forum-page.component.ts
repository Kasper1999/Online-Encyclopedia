import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.scss']
})
export class ForumPageComponent implements OnInit {
  dataForComment = ['Довольно длинный и серьёзный комментарий.  Он наполнен глубоким смыслом. У него есть предназначение. И оно не заключается не только в том, чтобы передать мысль своего автора. Нет. Всё на много серьёзнее. Данный комментарий может перевернуть чьё-то мировоззрение. И это прекрасно. Призовем на помощь демонов. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Средней длинный комментарий. Ничего не обычного. Просто заполнение нужного пространства для проверки. Ясная цель и чёткое её исполнение. Замечательно. На этот раз можно обойтись и без помощи демонов. ','Короткий комментарий.'];

  dataForPost = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ','Lorem ipsum dolor sit amet'];

  constructor() { }

  ngOnInit() {
  }

}
