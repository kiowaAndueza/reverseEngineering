import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admindaw2') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Marilola', email: 'admin@gmail.com', admin: true});
    } else if (email === 'user@gmail.com' && password === 'userdaw2'){
      this.setToken('abcdefghiabcdefghi');
      return of({ name: 'Roberto', email: 'user@gmail.com', admin: false});
    }
    return throwError(new Error('Failed to login'));
  }

  haveRoleAccess(menuName: any){
    const role = localStorage.getItem("role");
    if(role == 'admin'){
      return true;
    } else {
      if(menuName=='user'){
        return true;
      } else {
        return false;
      }
    }
  }
}
