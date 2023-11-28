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
  errorMessage: string = ''; // Agregamos una propiedad para almacenar el mensaje de error

  constructor(private authService: AuthService) {}

  onLoginClick(): void {
    const credentials = { email: this.email, password: this.password };

    this.authService.login(credentials).subscribe(
      (response) => {
        // Almacenar el token al iniciar sesión exitosamente
        this.authService.setToken(response.token);

        // Abrir una nueva ventana o pestaña del navegador
        window.open('/perfil-usuario', '_blank');

        // Realizar otras acciones necesarias después de iniciar sesión
        console.log('Respuesta del backend:', response);

        // Limpiar el mensaje de error en caso de éxito
        this.errorMessage = '';
      },
      (error) => {
        // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
        console.error('Error en la autenticación:', error);

        // Asignar el mensaje de error al atributo errorMessage
        this.errorMessage = error; // Aquí puedes personalizar el mensaje según la estructura del error
      }
    );
  }
}
