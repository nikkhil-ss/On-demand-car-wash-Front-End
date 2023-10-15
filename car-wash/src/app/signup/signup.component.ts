import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { SecurityService } from '../services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User=new User();
  constructor( private securityService:SecurityService,private router:Router){}

  ngOnInit() { }

  signup(){
     console.log(this.user);
     this.securityService.signup(this.user).subscribe(data=>{
      console.log(JSON.stringify(data));
      alert("Successfully Register");
      this.router.navigate(['/login'])
     },error=>{console.log("try again",error)
     alert("Successfully Register");
     this.router.navigate(['/login'])});

  }


}
