import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit{
  public  orderSummary:any;
  public orderId:any
  constructor(private route:ActivatedRoute, private router:Router,private orderService:OrderService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('orderId');
      this.orderId=id;
      console.log("hello orderi id",this.orderId);
    });
    this.getOneOrder();
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

 reload(){
  window.location.reload();
 }






}
