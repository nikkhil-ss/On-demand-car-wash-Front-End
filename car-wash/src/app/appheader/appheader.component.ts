import { Component } from '@angular/core';
import { UserauthService } from '../services/userauth.service';
import { Router } from '@angular/router';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent {
  constructor(private userAuth:UserauthService,private router:Router, public securityService:SecurityService) {

  }

isLoggedIn(){
  return this.userAuth.isLoggedIn();
}

logout(){
  this.router.navigate(['login']);
  this.userAuth.clear();
}
}
