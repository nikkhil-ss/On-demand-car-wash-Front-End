import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/assets/url/api';
import { SecurityService } from '../services/security.service';


const url=`${api.URL_SECURITY}`;
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user:User=new User();

  constructor(private http:HttpClient,private securityService:SecurityService){}

  ngOnInit(): void {

  }

  forgotPassword(){
    this.securityService.forgotPassword(this.user).subscribe(data=>{
      console.log(data);
    },error=>alert(error.error.text));

  }



}
