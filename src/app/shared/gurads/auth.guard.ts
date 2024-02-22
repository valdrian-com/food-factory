// auth.guard.ts
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

export function isAuthenticateGuard(): CanActivateFn {
  return () => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    if (authService.accessToken()) {
      return true;
    }
    router.navigate(['/auth/login']);
    return false;
  };
}

export function isNotAuthenticateGuard(): CanActivateFn {
  return () => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    if (!authService.accessToken()) {
      return true;
    }
    router.navigate(['/']);
    return false;
  };
}
