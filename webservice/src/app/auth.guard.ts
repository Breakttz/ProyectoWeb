// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './pages/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userToken = this.authService.getToken();

    if (userToken) {
      // Decodifica el token para obtener la información del usuario
      const decodedToken: any = JSON.parse(atob(userToken.split('.')[1]));

      // Verifica si el ID del usuario coincide con el ID requerido para ser admin
      const userId = decodedToken.id || '';
      const requiredAdminId = '6565856d02e2b0a2c67e9911';
      const isAdmin = userId === requiredAdminId;

      if (isAdmin) {
        return true;  // Usuario tiene un token activo y es admin
      }
    }

    // No autenticado, token incorrecto, no es admin o no es el ID específico, redirige a la página de inicio de sesión
    this.router.navigate(['/']);
    return false;
  }
}
