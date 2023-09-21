import { Component, OnInit } from '@angular/core';
import { WashPacks } from 'src/app/models/wash-packs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userwashpacks',
  templateUrl: './userwashpacks.component.html',
  styleUrls: ['./userwashpacks.component.css']
})
export class UserwashpacksComponent implements OnInit {
  WashPack: Array<WashPacks>=[];
constructor(private userService:UserService){}
  ngOnInit(): void {
    this.getWashPacks();
  }

  getWashPacks(){
    this.userService.getWashPacks().subscribe(data=>{
      this.WashPack=data;
      console.log("Inside getWashPack",data);
    })
  }
}
