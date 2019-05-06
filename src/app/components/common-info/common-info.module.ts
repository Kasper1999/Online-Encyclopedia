import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonInfoRoutingModule } from './common-info-routing.module';
import { CommonInfoComponent } from './common-info.component';
import { CommonInfoSidebarComponent } from './common-info-sidebar/common-info-sidebar.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonInfoTermsComponent } from './common-info-terms/common-info-terms.component';
// Import Froala plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
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

@NgModule({
  imports: [
    CommonModule,
    CommonInfoRoutingModule,
    SharedModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [
    CommonInfoComponent,
    CommonInfoSidebarComponent,
    CommonInfoTermsComponent,
    CommonInfoConfidentialityComponent,
    CommonInfoAgreementComponent,
    CommonInfoRightholdersComponent,
    CommonInfoCreatorsComponent,
    CommonInfoAboutComponent,
    CommonInfoBrandsComponent,
    CommonInfoPersonalListComponent,
    CommonInfoStylesComponent,
    VersionAlpha01Component,
    CommonInfoApiComponent,
    CommonInfoVacanciesComponent
  ]
})
export class CommonInfoModule {}
