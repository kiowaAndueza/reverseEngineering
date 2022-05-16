import { AuthService } from '../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ChildUserGuard implements CanActivateChild {
  constructor(private router: Router, private auth: AuthService) {}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.getToken()?.match('abcdefghijklmnopqrstuvwxyz')) {
      this.router.navigate(['admin/home']);
    }
    return true;
  }
  
}
