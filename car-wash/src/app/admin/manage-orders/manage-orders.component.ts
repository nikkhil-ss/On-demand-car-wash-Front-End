import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/models/order-details';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit{
  updatedStatus='';
  OrderList:Array<OrderDetails>=[];
  constructor(private orderService:OrderService, private router:Router){}
  ngOnInit(): void {
    this.getOrderList();
  }

  getOrderList(){
    this.orderService.getOrderList().subscribe(data=>{
      this.OrderList=data;
    })
  }

  changeStatus(value:any){
    console.log(value)
    this.updatedStatus=value.target.value;
    switch(this.updatedStatus) {
       case "Confirmed": {
          //do something
          console.log("Confirmed")

          break;
       }
       case "Completed": {
          //do something
          console.log("Completed")
          break;
       }

    }
  }
  onclick(orderId:any){
      console.log(orderId);
      this.router.navigate(['admin/orderStatus',orderId]);

  }


}
