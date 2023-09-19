import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/assets/url/api';
import { OrderDetails } from '../models/order-details';
import { Observable } from 'rxjs';

const url=`${api.URL_USER}`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addOrder(order:OrderDetails):Observable<any>{
    console.log("Inside Userr AddOrder");
    return this.http.post(url+'/addOrder',order)
  }

}
