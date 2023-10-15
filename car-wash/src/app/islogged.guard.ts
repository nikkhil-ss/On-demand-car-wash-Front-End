import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserauthService } from './services/userauth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {
  constructor(private userAuthService:UserauthService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  const check=this.userAuthService.isLoggedIn();

      if(!check){
          this.router.navigate(["/login"]);
          
      }
    return true;
  }
}
