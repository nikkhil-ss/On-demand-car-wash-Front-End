import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from 'src/app/models/order-details';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { WasherService } from 'src/app/services/washer.service';
import { WashPacks } from 'src/app/models/wash-packs';
import { Router } from '@angular/router';
import { UserauthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit{

  washPacks: Array<WashPacks>=[];
  order: OrderDetails=new OrderDetails();
  constructor(private userService:UserService,private washerService:WasherService,private router:Router,private userAuthService:UserauthService){}
 ngOnInit() {

  this.getWashpacks();
 }

  addOrder(){
    console.log(this.order);
    this.order.useremailid=this.userAuthService.getUser();
    this.userService.addOrder(this.order).subscribe((data)=>{
      console.log("Saved Order");
      alert("Order Submitted");
      this.router.navigate(["/user"]);
    });
  }

  getWashpacks(){
      this.userService.getWashPacks().subscribe(data=>{
          this.washPacks=data;
          console.log("user washpas",this.washPacks);
      })
  }



}
