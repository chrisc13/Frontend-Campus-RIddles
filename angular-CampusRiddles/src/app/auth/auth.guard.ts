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
  constructor(private authenticationService: AuthService, 
    private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const user = this.authenticationService.userValue;

    if (user) {
        // check if route is restricted by role
        if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
            // role not authorised so redirect to home page
            this.router.navigate(['/']);
            return false;
        }

        // authorised so return true
        return true;
  }
}



  // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  //       return false;

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<any> | boolean | UrlTree {

  //   const isAuthenticated = this.authService.isLoggedIn();
  //   if (isAuthenticated) {
  //     console.log('logged in ===true');
  //     return true;
  //   } else {
  //     this.router.navigateByUrl('/auth');
  //   }
  //   return true;
  // }
}


