import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from 'src/app/models/order-details';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit{

  order: OrderDetails=new OrderDetails();
  constructor(private userService:UserService){}
 ngOnInit() {}

  addOrder(){
    console.log(this.order);
    this.userService.addOrder(this.order).subscribe((data)=>{
      console.log("Saved Order");
    });
  }



}
