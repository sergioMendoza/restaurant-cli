import { Routes } from '@angular/router';

export const COMMONLAYOUT_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'product',
    loadChildren: () =>
      import('../../product/product.module').then((m) => m.ProductModule)
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('../../customer/customer.module').then((m) => m.CustomerModule)
  }

];
