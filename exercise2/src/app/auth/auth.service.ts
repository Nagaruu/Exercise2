// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  authToken: string | null = null;
  apiUrl: string = 'https://localhost:3000';


  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      tap((response) => {
        if (response && response.token) {
          this.isAuthenticated = true;
          this.authToken = response.token;
        //   localStorage.setItem('authToken', this.authToken);
        }
      }),
      catchError((error) => {
        console.error('Login failed:', error);
        return of(null);
      })
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    this.authToken = null;
    localStorage.removeItem('authToken');
  }

  getAuthToken(): string | null {
    return this.authToken;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
