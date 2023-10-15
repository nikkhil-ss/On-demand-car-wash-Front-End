import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-all-washers',
  templateUrl: './all-washers.component.html',
  styleUrls: ['./all-washers.component.css']
})
export class AllWashersComponent {
  WasherList:Array<User>=[];

  constructor(private securityService:SecurityService){}
  ngOnInit(): void {
    this.getAllWashers();
  }

  getAllWashers(){
    this.securityService.getWasherList().subscribe(data=>{
      this.WasherList=data;
      console.log("UserList",this.WasherList)
    })
  }

  
}
