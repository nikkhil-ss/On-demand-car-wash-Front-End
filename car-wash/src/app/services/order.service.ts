import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDetails } from '../models/order-details';
import { Observable } from 'rxjs';
import { api } from 'src/assets/url/api';

const url=`${api.URL_ORDER}`;
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }

  addOrder(order:OrderDetails):Observable<any>{
    return this.httpClient.post(url+'/add', order);
  }
  getOrderList():Observable<OrderDetails[]>{
    return this.httpClient.get<OrderDetails[]>(url+'/findall');
  }

  getOneOrder(orderId:any):Observable<OrderDetails[]>{
      return this.httpClient.get<OrderDetails[]>(url+"/findone/"+orderId);
  }
  confirmOrder(orderId:any):Observable<any>{
      return this.httpClient.put(url+"/updateStatus/confirmed/"+orderId,"");
  }
  completeOrder(orderId:any):Observable<any>{
    return this.httpClient.put(url+"/updateStatus/completed/"+orderId,"");
}

assignWasher(assignWasher:OrderDetails):Observable<any>{
 return this.httpClient.put(url+"/assignWasher",assignWasher);
}

}
