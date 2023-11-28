// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLoginClick(): void {
    const credentials = { email: this.email, password: this.password };

    this.authService.login(credentials).subscribe(
      (response) => {
        // Almacenar el token al iniciar sesión exitosamente
        this.authService.setToken(response.token);

        // Realizar otras acciones necesarias después de iniciar sesión
        console.log('Respuesta del backend:', response);
      },
      (error) => {
        // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
        console.error('Error en la autenticación:', error);
      }
    );
  }
}
