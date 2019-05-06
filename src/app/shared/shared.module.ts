import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DragDropDirective } from './directives/drag-drop/drag-drop.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { GalleryModule } from '@ngx-gallery/core';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { ScrollbarModule } from 'ngx-scrollbar';

import { MaterialModule } from './material.module';

import { ProfileSidebarComponent } from '../components/profile/profile-sidebar/profile-sidebar.component';
import { ContentSidebarComponent } from '../components/main/content-sidebar/content-sidebar.component';
import { ColorPickerComponent } from './components/ui/color-picker/color-picker.component';
import { LargeFrameComponent } from './components/card-frames/large-frame/large-frame.component';
import { SmallFrameComponent } from './components/card-frames/small-frame/small-frame.component';
import { ListFrameComponent } from './components/card-frames/list-frame/list-frame.component';
import { CatalogsPanelComponent } from './components/main-page-panels/catalogs-panel/catalogs-panel.component';
import { CardComponent } from './components/ui/card/card.component';
import { AvatarComponent } from './components/profile-components/avatar/avatar.component';
import { D3BarChartComponent } from './components/d3/d3-bar-chart/d3-bar-chart.component';
import { D3LineComponent } from './components/d3/d3-line/d3-line.component';
import { ContentSliderComponent } from './components/content-page/content-slider/content-slider.component';
import { CoverSliderComponent } from './components/content-page/cover-slider/cover-slider.component';
import { D3BulletComponent } from './components/d3/d3-bullet/d3-bullet.component';
import { D3SunburstComponent } from './components/d3/d3-sunburst/d3-sunburst.component';
import { AdditionalPanelComponent } from './components/main-page-panels/additional-panel/additional-panel.component';
import { MainPanelComponent } from './components/main-page-panels/main-panel/main-panel.component';
import { SimpeInputComponent } from './components/ui/simpe-input/simpe-input.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { SpaceBackgroundComponent } from './components/ui/space-background/space-background.component';
import { CopyrightComponent } from './components/common/copyright/copyright.component';
import { ProfileSecurityInfoComponent } from './components/profile-components/profile-security-info/profile-security-info.component';
import { ExpansionPanelComponent } from './components/ui/expansion-panel/expansion-panel.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ReadMoreComponent } from './components/common/read-more/read-more.component';
import { CogMenuComponent } from './components/ui/cog-menu/cog-menu.component';
import { ScrollButtonComponent } from './components/scroll-button/scroll-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    AngularCropperjsModule,
    GalleryModule.forRoot(),
    SweetAlert2Module.forRoot(),
    ScrollbarModule,
    NvD3Module,
    InfiniteScrollModule,
    FormsModule,
    ParallaxScrollModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    DragDropDirective,
    ReadMoreComponent,
    CogMenuComponent,
    FlexLayoutModule,
    AngularCropperjsModule,
    GalleryModule,
    InfiniteScrollModule,
    FormsModule,
    MaterialModule,
    ParallaxScrollModule,
    ScrollbarModule,
    ReactiveFormsModule,
    LargeFrameComponent,
    SmallFrameComponent,
    ListFrameComponent,
    CatalogsPanelComponent,
    AvatarComponent,
    CardComponent,
    D3BarChartComponent,
    ContentSliderComponent,
    CoverSliderComponent,
    D3BulletComponent,
    D3SunburstComponent,
    D3LineComponent,
    AdditionalPanelComponent,
    MainPanelComponent,
    SimpeInputComponent,
    ButtonComponent,
    SpaceBackgroundComponent,
    CopyrightComponent,
    ProfileSecurityInfoComponent,
    FooterComponent,
    ColorPickerComponent,
    ExpansionPanelComponent,
    FooterComponent,
    ScrollButtonComponent
  ],
  declarations: [
    DragDropDirective,
    ReadMoreComponent,
    CogMenuComponent,
    LargeFrameComponent,
    SmallFrameComponent,
    ListFrameComponent,
    CatalogsPanelComponent,
    AvatarComponent,
    CardComponent,
    D3BarChartComponent,
    D3LineComponent,
    ContentSliderComponent,
    CoverSliderComponent,
    D3BulletComponent,
    D3SunburstComponent,
    AdditionalPanelComponent,
    MainPanelComponent,
    SimpeInputComponent,
    ButtonComponent,
    SpaceBackgroundComponent,
    CopyrightComponent,
    ProfileSecurityInfoComponent,
    FooterComponent,
    ColorPickerComponent,
    ExpansionPanelComponent,
    FooterComponent,
    ScrollButtonComponent
  ],
  providers: []
})
export class SharedModule {}
