import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import {
  registerLocaleData,
  PathLocationStrategy,
  LocationStrategy
} from '@angular/common';
import en from '@angular/common/locales/en';
import es from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './shared/template/template.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { PosLayoutComponent } from './layouts/pos-layout/pos-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from './shared/services/theme-constant.service';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent,
    PosLayoutComponent,
    FullLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    TemplateModule,
    SharedModule,
    NgChartjsModule
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: en_US
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    ThemeConstantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
