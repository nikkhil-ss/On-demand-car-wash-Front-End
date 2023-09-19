import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User=new User();
  constructor( private securityService:SecurityService){}

  ngOnInit() { }

  signup(){
     console.log(this.user);
     this.securityService.signup(this.user).subscribe(data=>{
      console.log(data);
     },error=>console.log("try again",error));

  }


}
