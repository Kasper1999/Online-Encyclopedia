import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { ContentPageComponent } from './content-page/content-page.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'content', component: ContentPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
