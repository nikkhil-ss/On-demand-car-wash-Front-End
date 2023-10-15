import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserauthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {

  user:User=new User();
  constructor(private userauthService:UserauthService){}
  ngOnInit(): void {
   this.call();
  }
  call(){
   this.user.email= this.userauthService.getUser();
   this.user.role=this.userauthService.getRoles();
   
  }


}
