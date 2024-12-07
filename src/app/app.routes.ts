import { Routes } from '@angular/router';
import { authRoutes } from './features/authentication/auth.routes';

export const routes: Routes = [authRoutes,
    {
        path: "**",
        redirectTo: ''
    }
];