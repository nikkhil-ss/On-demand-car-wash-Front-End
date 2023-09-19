import { Component } from '@angular/core';
import { OrderDetails } from 'src/app/models/order-details';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {
  order: OrderDetails= new OrderDetails();
  constructor(private os: OrderService) {}

  ngOnInit(): void {}

  addOrder(order: OrderDetails){
    this.os.addOrder(this.order).subscribe(data =>{
      console.log(data);
    });
  }
}
