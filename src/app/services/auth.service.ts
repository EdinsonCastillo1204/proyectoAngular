import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',  // Asegúrate de que el servicio esté disponible en toda la aplicación
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users/login'; // Cambié la URL a la correcta

  constructor(private http: HttpClient) {}

  // Método para hacer login
  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, password }).pipe(
      catchError((error) => {
        console.error('Error en el login:', error);  // Log de error
        throw error;  // Lanza el error para que lo manejes en el componente
      })
    );
  }
}
