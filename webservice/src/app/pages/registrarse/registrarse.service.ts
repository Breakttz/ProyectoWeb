import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3002'; // Cambia esta URL según la configuración de tu servidor Express

  constructor(private http: HttpClient) {}

  enviarDatos(formData: any): Observable<any> {
    // Asegúrate de que la ruta sea correcta en relación con tu servidor Express
    return this.http.post(`${this.apiUrl}/auth/register`, formData);
  }
}
