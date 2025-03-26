import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service'; 

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const publicRoutes = ['/login', '/register']; 

  if (!authService.isLoggedIn() && !publicRoutes.includes(state.url)) {
    router.navigate(['/login']);
    return false;
  }

  return true; 
};
