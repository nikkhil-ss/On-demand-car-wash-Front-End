import { Component } from '@angular/core';
import { User } from '../models/user';
import { SecurityService } from '../services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User=new User();
  constructor( private securityService:SecurityService,private router:Router){}

  ngOnInit() { }

  login(){
     console.log(this.user);
     this.securityService.login(this.user).subscribe(data=>{
      console.log(data);
      this.router.navigate(['user'])

     },error=>console.log(error));

  }
}
