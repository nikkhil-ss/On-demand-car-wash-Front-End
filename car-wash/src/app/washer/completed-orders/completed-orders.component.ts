import { Component } from '@angular/core';
import { OrderDetails } from 'src/app/models/order-details';
import { WasherService } from 'src/app/services/washer.service';

@Component({
  selector: 'app-completed-orders',
  templateUrl: './completed-orders.component.html',
  styleUrls: ['./completed-orders.component.css']
})
export class CompletedOrdersComponent {
  OrderList: Array<OrderDetails>=[]
  constructor(private washerService:WasherService){}
    ngOnInit(): void {
      this.getPendingList();
    }

    getPendingList(){
      this.washerService.getCompletedOrders().subscribe(data=>{
        this.OrderList=data;
        console.log(data);
      })
    }

}
