import { Routes } from '@angular/router';

export const POSLAYOUT_ROUTES: Routes = [
    {
        path: 'pos',
        loadChildren: () => import('../../pos/pos.module').then(m => m.PosModule),
    }
];
