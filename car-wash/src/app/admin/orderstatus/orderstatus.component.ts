import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OrderDetails } from 'src/app/models/order-details';
import { OrderService } from 'src/app/services/order.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit{
  public  orderSummary:any;
  public orderId:any
  washerList:any;
  assignWasherDetails:OrderDetails=new OrderDetails();
  constructor(private route:ActivatedRoute, private router:Router,private orderService:OrderService,private securityService:SecurityService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('orderId');
      this.orderId=id;
      console.log("hello orderi id",this.orderId);
    });
    this.getOneOrder();
    this.getAllWashers();
  }

  getOneOrder(){
      this.orderService.getOneOrder(this.orderId).subscribe(data=>{
        this.orderSummary=data;
        console.log("ordersumm",this.orderSummary)
        console.log("one order data",JSON.stringify(data));
      })
  }
  confirmOrder(){
      console.log("confirming oorder with order Id",this.orderId);
      this.orderService.confirmOrder(this.orderId).subscribe(data=>{
        alert(data.status || data);
      },error=>alert(error.error.text));
  }
  completeOrder(){
    console.log("confirming oorder with order Id",this.orderId);
    this.orderService.completeOrder(this.orderId).subscribe(data=>{
      alert(data.status);
    },error=>(alert(error.error.text)));
}
checkWasher(){
  if(this.orderSummary.washerName==="NA"){
    return true;
  }

  return false;
}

getAllWashers(){
  this.securityService.getAllWasher().subscribe(data=>{
    this.washerList=data;
      console.log("Washers list order status",this.washerList);

  })
}

washerAssign(event:any){
  console.log(event.target.value);
  this.assignWasherDetails.washerName=event.target.value;
  this.assignWasherDetails.orderId=this.orderSummary.orderId;
  console.log(event,"--",this.orderSummary.orderId);
  this.orderService.assignWasher(this.assignWasherDetails).subscribe(data=>{
    alert("Washer Assigned Successfully");
  },error=>{
    console.log(error);
  })
}

 reload(){
  window.location.reload();
 }






}
