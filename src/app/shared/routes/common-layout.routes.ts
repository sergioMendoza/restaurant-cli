import { Routes } from '@angular/router';

export const COMMONLAYOUT_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    }
];
