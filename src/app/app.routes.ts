import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';
import { ConfirmationPageComponent } from './core/confirmation-page/confirmation-page.component';


export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './components/main/main.module#MainModule'
  },
  {
    path: 'profile',
    loadChildren: './components/profile/profile.module#ProfileModule'
  },
  {
    path: 'info',
    loadChildren: './components/common-info/common-info.module#CommonInfoModule'
  },
  {
    path: 'team',
    loadChildren: './components/team-page/team-page.module#TeamPageModule'
  },
  {
    path: 'forum',
    loadChildren: './components/forum/forum.module#ForumModule'
  },
  {
    path: 'email_confirmation',
    component: ConfirmationPageComponent
  },
  {
    path: '404',
    component: NotFoundPageComponent
  },
  { path: '**', redirectTo: '/404' }
];
