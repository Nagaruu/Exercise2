// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './shared/model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  authToken: string | null = null;
  apiUrl: string = 'http://localhost:3000';


  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  authenticate(username: string, password: string): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/users`, { username, password })
    .pipe(
      tap((user: User) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
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
