import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from 'src/app/models/order-details';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { WasherService } from 'src/app/services/washer.service';
import { WashPacks } from 'src/app/models/wash-packs';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit{

  washPacks: Array<WashPacks>=[];
  order: OrderDetails=new OrderDetails();
  constructor(private userService:UserService,private washerService:WasherService){}
 ngOnInit() {

  this.getWashpacks();
 }

  addOrder(){
    console.log(this.order);
    this.userService.addOrder(this.order).subscribe((data)=>{
      console.log("Saved Order");
    });
  }

  getWashpacks(){
      this.washerService.getWashPacks().subscribe(data=>{
          this.washPacks=data;
      })
  }



}
