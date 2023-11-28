// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3002'; // Reemplaza con la URL de tu backend
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    // Envia la solicitud POST al backend para autenticación
    return this.http.post(`${this.apiUrl}/auth/login`, credentials)
    .pipe(
      catchError(error => {
        // Propaga el error con el mensaje personalizado
        return throwError(error.error.message || 'Error en la autenticación');
      })
    );
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    // Verifica si hay un token almacenado
    const token = this.getToken();
    return token !== null;
  }
}
