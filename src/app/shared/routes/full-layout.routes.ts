import { Routes, RouterModule } from '@angular/router';

export const FULLLAYOUT_ROUTES: Routes = [
    {
        path: 'authentication',
        loadChildren: () => import('../../authentication/authentication.module').then(m => m.AuthenticationModule)
    }
];
