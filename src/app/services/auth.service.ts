import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, {
      username,
      password
    })
  }

  saveToken(token: string) {
    localStorage.setItem('authToken', token)

  }

  logout() {
    localStorage.removeItem('authToken')
  }

  isloggedIn(): boolean {
    return !!localStorage.getItem('authToken')
  }
}