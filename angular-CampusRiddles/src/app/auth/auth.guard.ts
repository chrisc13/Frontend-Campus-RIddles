import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | boolean | UrlTree {
    const isAuthenticated = this.authService.isLoggedIn();
    if (isAuthenticated) {
      console.log('logged in ===true');
      return true;
    } else {
      this.router.navigateByUrl('/auth');
    }
    return true;
  }
}
