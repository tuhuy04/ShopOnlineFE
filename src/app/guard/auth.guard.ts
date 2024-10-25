import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const accessToken  = this.authService.getToken();
      let url: string = state.url;
      if (accessToken === null || accessToken === '' || accessToken === 'false' ) {
        this.authService.redirectUrl = url;
        this.router.navigate(['login'],{ queryParams: { goto: url } });
        return false;
      } else {
        return true;
      }
  }

}
