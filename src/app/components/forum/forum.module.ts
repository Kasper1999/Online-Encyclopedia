import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule}  from '@angular/material/icon';

import { ForumRoutingModule } from './forum-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ForumComponent } from './forum.component';
import { ForumMainComponent } from './forum-main/forum-main.component';
import { ForumPageComponent } from './forum-page/forum-page.component';
import { ForumMenuComponent } from './forum-menu/forum-menu.component';
import { ForumCommentComponent } from './forum-comment/forum-comment.component';
import { ForumPostComponent } from './forum-post/forum-post.component';

@NgModule({
  imports: [
  	CommonModule,
  	SharedModule,
  	ForumRoutingModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [
  	ForumComponent,
  	ForumMainComponent,
  	ForumPageComponent,
  	ForumMenuComponent,
    ForumCommentComponent,
    ForumPostComponent
  ]
})
export class ForumModule {}
