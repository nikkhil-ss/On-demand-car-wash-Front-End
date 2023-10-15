import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/assets/url/api';
import { OrderDetails } from '../models/order-details';
import { Observable } from 'rxjs';
import { WashPacks } from '../models/wash-packs';
import { UserauthService } from './userauth.service';
import { OrderReceipt } from '../models/order-receipt';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
const url=`${api.URL_USER}`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private userAuthService:UserauthService) { }
 

  getWashPacks():Observable<WashPacks[]> {
    console.log("inside userservice washpack");
    return this.http.get<WashPacks[]>(url+"/getAllWashPacks");
  }


  addOrder(order:OrderDetails):Observable<any>{
    console.log("Inside Userr AddOrder");
    return this.http.post(url+'/addOrder',order)
  }

  getAllOrders():Observable<OrderDetails[]>{
    console.log("inside gett ALl Orders--",this.userAuthService.getUser());
    return this.http.get<OrderDetails[]>("http://localhost:8082/orders/findMyOrders/"+this.userAuthService.getUser());
  }
  
  cancelOrder(data:OrderDetails):Observable<any>{
    console.log("Inside cancel order",data.orderId)

    return this.http.put("http://localhost:8085/users/cancelOrder",data)
  }

  getReceipt(dataId:any):Observable<OrderReceipt>{
    return this.http.get<OrderReceipt>(url+"/getReceipt/"+dataId);
  }

  createTransaction(amount: any): Observable<any>{
    return this.http.get<any>("http://localhost:8087/pay/createTransaction/" + amount);
  }
 



}
