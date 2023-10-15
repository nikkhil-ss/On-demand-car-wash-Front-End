import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/models/order-details';
import { WasherService } from 'src/app/services/washer.service';




@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {
OrderList: Array<OrderDetails>=[]
constructor(private washerService:WasherService,private router:Router){}
  ngOnInit(): void {
    this.getPendingList();
  }

  getPendingList(){
    this.washerService.getPendingOrders().subscribe(data=>{
      this.OrderList=data;
      console.log(data);
    })
  }
  onclick(orderId:any){
    console.log(orderId);
    this.router.navigate(['admin/orderStatus',orderId]);

}


}
