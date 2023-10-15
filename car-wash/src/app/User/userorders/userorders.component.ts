import { Component } from '@angular/core';
import { OrderDetails } from 'src/app/models/order-details';
import { UserService } from 'src/app/services/user.service';
import { UserauthService } from 'src/app/services/userauth.service';
// import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.css']
})
export class UserordersComponent {
  order: OrderDetails=new OrderDetails();
  OrderList: Array<OrderDetails>=[]
  constructor(private userService:UserService){}
    ngOnInit(): void {
      this.getPendingList();
    }

    getPendingList(){
      this.userService.getAllOrders().subscribe(data=>{
        this.OrderList=data;
        console.log(data);
      })
    }

    cancelOrder(orderId:any){
      this.order.orderId=orderId;
      this.userService.cancelOrder(this.order).subscribe(data=>{
        console.log(data);
      },error=>{console.log(error)});
     
    }

    make(){
      // let pdf=new jsPDF();

    }

    getReceipt(dataId:any){
      this.userService.getReceipt(dataId).subscribe(data=>{
        console.log("orderrecipt",data);
      },error=>{console.log(error)});
    }




}
