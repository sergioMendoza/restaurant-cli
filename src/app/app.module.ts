import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  registerLocaleData,
  PathLocationStrategy,
  LocationStrategy
} from '@angular/common';
import es from '@angular/common/locales/es';
import { NgChartjsModule } from 'ng-chartjs';

// ngrx dependencies
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, CustomSerializer } from './store';

// ng zorro dependencies
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

// services
import { ThemeConstantService } from './shared/services/theme-constant.service';


// modules
import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './shared/template/template.module';
import { SharedModule } from './shared/shared.module';

// main components
import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { PosLayoutComponent } from './layouts/pos-layout/pos-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

// ngrx reducers

registerLocaleData(es);

const environment = {
  development: true,
  production: false
};

/** Assign all ng-zorro modules to this array*/
const antdModule = [NzBreadCrumbModule];

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

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
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    environment.development ? StoreDevtoolsModule.instrument() : [],
    TemplateModule,
    SharedModule,
    NgChartjsModule,
    ...antdModule
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
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    },
    ThemeConstantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
