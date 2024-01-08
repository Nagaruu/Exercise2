import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Route, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'https://localhost:3000';

  constructor(private router: Router) { }
//   login (username: string, password: string): Observable<any> {
//     return this.http.post(this.apiUrl + '/api/User/login', { username, password });
//   }

//   logout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("userName");
//     this.router.navigate(['login'])
//   }

//   public isAuthenticated() : boolean {
//     const token = localStorage.getItem('authToken');
//     return token !== "";
//   }
}