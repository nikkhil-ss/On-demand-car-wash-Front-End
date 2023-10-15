import { Component } from '@angular/core';
import { OrderDetails } from 'src/app/models/order-details';
import { OrderReceipt } from 'src/app/models/order-receipt';

import { UserService } from 'src/app/services/user.service';
import { UserauthService } from 'src/app/services/userauth.service';
// import { jsPDF } from 'jspdf';

declare var Razorpay:any;
@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.css']
})
export class UserordersComponent {
  order: OrderDetails=new OrderDetails();
  OrderList: Array<OrderDetails>=[]

  orderReceipt:OrderReceipt=new OrderReceipt();
  paymentId: string='';
  error: string='';

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
        this.orderReceipt=data;
        console.log("cars number",this.orderReceipt.noOfCarsWashed);
      },error=>{console.log(error)});
    }

  
   
    paynow(order:OrderDetails){

      this.getReceipt(order.orderId);
      console.log("Amount to be paid ",this.orderReceipt.noOfCarsWashed);
      

      this.userService.createTransaction(88).subscribe(
        (response) => {
          console.log(response);
          this.openTransactionModel(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
   
    openTransactionModel(response: any){
      var options = {
        order_id: response.order_id,
        key: response.key,
        amount: response.amount,
        currency: response.currency,
        name: 'Nikhil',
        description: 'Payment',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_BtJvs5Wo4oH9LmBssIdM90oPsuqBHr2RD25prIUCt5PJRUlG7hNBW2LYXGfYot1zrhI&usqp=CAU',
        handler: (response: any) => {
          this.processResponse(response);
        },
        prefill: {
          name: 'Splash Wash',
          email: 'nikhil7singh02@gmail.com',
          contact: '2534353'
        },
        notes:{
          address: 'SpawnIsland'
        },
        theme: {
          color: '#F37254'
        }
      };
  
      var razorPayObject = new Razorpay(options);
      razorPayObject.open();
    }
  
    processResponse(resp: any){
      console.log(resp);
    }




   
       



}
