import { Injectable } from '@angular/core';
import { 
          CanActivate, 
          Router, ActivatedRouteSnapshot, 
          RouterStateSnapshot, 
          UrlTree 
       } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!window.localStorage.getItem('token')){ 
      this.router.navigate(['auth'])
      return false;
    }
      return true;
  }
  
}
