import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonInfoComponent } from './common-info.component';
import { CommonInfoTermsComponent } from './common-info-terms/common-info-terms.component';
import { CommonInfoConfidentialityComponent } from './common-info-confidentiality/common-info-confidentiality.component';
import { CommonInfoAgreementComponent } from './common-info-agreement/common-info-agreement.component';
import { CommonInfoRightholdersComponent } from './common-info-rightholders/common-info-rightholders.component';
import { CommonInfoCreatorsComponent } from './common-info-creators/common-info-creators.component';
import { CommonInfoAboutComponent } from './common-info-about/common-info-about.component';
import { CommonInfoBrandsComponent } from './common-info-brands/common-info-brands.component';
import { CommonInfoPersonalListComponent } from './common-info-personal-list/common-info-personal-list.component';
import { CommonInfoStylesComponent } from './common-info-styles/common-info-styles.component';
import { VersionAlpha01Component } from './common-info-versions/alpha-0.0.1/version-alpha-0.0.1.component';
import { CommonInfoApiComponent } from './common-info-api/common-info-api.component';
import { CommonInfoVacanciesComponent } from './common-info-vacancies/common-info-vacancies.component';

const routes: Routes = [
  {
    path: '',
    component: CommonInfoComponent,
    children: [
      {
        path: '',
        redirectTo: 'terms_of_use'
      },
      {
        path: 'terms_of_use',
        pathMatch: 'full',
        component: CommonInfoTermsComponent
      },
      {
        path: 'confidentiality',
        pathMatch: 'full',
        component: CommonInfoConfidentialityComponent
      },
      {
        path: 'agreement',
        pathMatch: 'full',
        component: CommonInfoAgreementComponent
      },
      {
        path: 'rightholders',
        pathMatch: 'full',
        component: CommonInfoRightholdersComponent
      },
      {
        path: 'creators',
        pathMatch: 'full',
        component: CommonInfoCreatorsComponent
      },
      {
        path: 'about',
        pathMatch: 'full',
        component: CommonInfoAboutComponent
      },
      {
        path: 'brands',
        pathMatch: 'full',
        component: CommonInfoBrandsComponent
      },
      {
        path: 'personal_list',
        pathMatch: 'full',
        component: CommonInfoPersonalListComponent
      },
      {
        path: 'styles',
        pathMatch: 'full',
        component: CommonInfoStylesComponent
      },
      {
        path: 'alpha-0.0.1',
        pathMatch: 'full',
        component: VersionAlpha01Component
      },
      {
        path: 'API',
        pathMatch: 'full',
        component: CommonInfoApiComponent
      },
      {
        path: 'vacancies',
        pathMatch: 'full',
        component: CommonInfoVacanciesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonInfoRoutingModule {}
