import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  UserList:Array<User>=[];

  constructor(private securityService:SecurityService){}
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.securityService.getAllUsers().subscribe(data=>{
      this.UserList=data;
      console.log("UserList",this.UserList)
    })
  }

}
