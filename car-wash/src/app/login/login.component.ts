import { Component } from '@angular/core';
import { User } from '../models/user';
import { SecurityService } from '../services/security.service';
import { Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User=new User();
  constructor( private securityService:SecurityService,private router:Router,private userAuthService:UserauthService,){}

  ngOnInit(

  ) {

  }

  login(){
     console.log(this.user);
     this.securityService.login(this.user).subscribe(data=>{
      this.userAuthService.setUser(this.user.email);
      console.log("token",data.token);
      console.log("role",data.role);
      this.userAuthService.setToken(data.token);
      this.userAuthService.setRoles(data.role);

      const role=data.role;
      if(role==='ADMIN'){
        this.router.navigate(['admin']);
      }
      else if(role==='USER'){
        this.router.navigate(['user']);
      }
      else if(role==='WASHER'){
        this.router.navigate(['washer']);
      }

     },error=>console.log(error));

  }


}
