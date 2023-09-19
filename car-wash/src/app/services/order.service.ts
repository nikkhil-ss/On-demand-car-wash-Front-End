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

}
