import { Route } from '@angular/router';

export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./auth.page').then((m) => m.AuthPage),
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.page').then((m) => m.LoginPage),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register.page').then((m) => m.RegisterPage),
      },
      {
        path: 'forget-password',
        loadComponent: () =>
          import('./pages/forget-password/forget-password.page').then(
            (m) => m.ForgetPasswordPage
          ),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./pages/new-password/new-password.page').then(
            (m) => m.NewPasswordPage
          ),
      },
    ],
  },
];
