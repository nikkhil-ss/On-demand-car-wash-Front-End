import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/assets/url/api';
import { OrderDetails } from '../models/order-details';
import { WashPacks } from '../models/wash-packs';


const url_washer=`${api.URL_WASHER}`;
@Injectable({
  providedIn: 'root'
})
export class WasherService  {


  constructor( private httpClient:HttpClient){}


   getPendingOrders():Observable<OrderDetails[]>{
    return this.httpClient.get<OrderDetails[]>(url_washer+"/findPending");

  }

  getCompletedOrders():Observable<OrderDetails[]>{
    return this.httpClient.get<OrderDetails[]>(url_washer+"/findCompleted");
  }

  getWashPacks():Observable<WashPacks[]>{
    return this.httpClient.get<WashPacks[]>(url_washer+"/seeWashPacks");
  }
}
