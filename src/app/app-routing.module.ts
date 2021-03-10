import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { PosLayoutComponent } from './layouts/pos-layout/pos-layout.component';

import { FULLLAYOUT_ROUTES } from './shared/routes/full-layout.routes';
import { COMMONLAYOUT_ROUTES } from './shared/routes/common-layout.routes';
import { POSLAYOUT_ROUTES } from './shared/routes/pos-layout.routes';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/pos/panel',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CommonLayoutComponent,
    children: COMMONLAYOUT_ROUTES
  },
  {
    path: '',
    component: PosLayoutComponent,
    children: POSLAYOUT_ROUTES
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: FULLLAYOUT_ROUTES
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
