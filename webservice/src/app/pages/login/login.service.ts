import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3002';
  private tokenKey = 'authToken';

  private authenticationChanged = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap((response: any) => {
        this.setToken(response.token);
        this.authenticationChanged.next(true); 
        this.router.navigate(['/perfil']);
        // Emite un cambio de autenticación
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
    this.authenticationChanged.next(false); // Emite un cambio de autenticación
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null;
  }

  getUsername(): string | null {
    // Obtén el nombre de usuario del token o devuelve null si no hay token
    const token = this.getToken();
    if (token) {
      // Decodifica el token para obtener la información del usuario (puedes usar una librería como jwt-decode)
      // Por simplicidad, asumiremos que el token contiene un campo 'username'
      const decodedToken: any = JSON.parse(atob(token.split('.')[1]));
      return decodedToken.username;
    }
    return null;
  }

  getAuthenticationChanged(): Observable<boolean> {
    return this.authenticationChanged.asObservable();

  }
  logout(): void {
    // Elimina el token al cerrar sesión
    this.removeToken();
  }
}
