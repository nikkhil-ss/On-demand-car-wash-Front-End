import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateFn, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserauthService } from './services/userauth.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  constructor(private authService: UserauthService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Your guard logic here
    console.log("inside auth guard ===",this.authService.getRoles());
    console.log("route data:",route.data['role'])
    const access= this.authService.getRoles() === route.data['role'] ;
        if(!access){
          alert("Unauthorized Access");
            this.router.navigate(["/"]);

            return false;
        }
    return access;
    // return true; // Replace with your actual guard logic
  }
}

