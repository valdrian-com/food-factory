import { Routes } from '@angular/router';
import {
  isAuthenticateGuard,
  isNotAuthenticateGuard,
} from './shared/gurads/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/routes').then((m) => m.AUTH_ROUTES),
    canActivate: [isNotAuthenticateGuard()],
  },

  {
    path: '',
    loadChildren: () =>
      import('./dashboard/routes').then((m) => m.DASHBOARD_ROUTES),
    canActivate: [isAuthenticateGuard()],
  },
  {
    path: 'clients',
    loadComponent: () =>
      import('./dashboard/pages/clients/clients.page').then(
        (m) => m.ClientsPage
      ),
  },
  {
    path: 'organizations',
    loadComponent: () =>
      import('./dashboard/pages/organizations/organizations.page').then(
        (m) => m.OrganizationsPage
      ),
  },
];
