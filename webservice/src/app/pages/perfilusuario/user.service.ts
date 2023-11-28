// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3002'; // Ajusta la URL según la configuración de tu servidor Express

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user`);
  }

  updateUser(userId: string, userData: any): Observable<any> {
    // Ajusta la ruta para actualizar un usuario en tu backend
    return this.http.put<any>(`${this.apiUrl}/user/${userId}`, userData);
  }

  deleteUser(userId: string): Observable<any> {
    // Ajusta la ruta para eliminar un usuario en tu backend
    return this.http.delete<any>(`${this.apiUrl}/user/${userId}`);
  }
}
