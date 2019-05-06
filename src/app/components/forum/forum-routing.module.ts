import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum.component';
import { ForumMainComponent } from './forum-main/forum-main.component';
import { ForumPageComponent } from './forum-page/forum-page.component';
import { ForumCommentComponent } from './forum-comment/forum-comment.component';
import { ForumPostComponent } from './forum-post/forum-post.component';

const routes: Routes = [
  {
    path: '',
    component: ForumComponent,
    children: [
      {
        path: '',
        pathMatch: 'full', 
        component: ForumMainComponent
      },
      {
        path: 'page',
        pathMatch: 'full', 
        component: ForumPageComponent
      },
      {
        path: 'page/post',
        pathMatch: 'full', 
        component: ForumPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule {} 
