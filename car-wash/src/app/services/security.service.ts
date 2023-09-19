import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { api } from 'src/assets/url/api';

const url_8081 = `${api.URL_SECURITY}`;

let token:any;
@Injectable({
  providedIn: 'root'
})
export class SecurityService {


  constructor(private httpClient: HttpClient) { }

  signup(user: User): Observable<any> {
    console.log("inside signup service",user);
    return this.httpClient.post(url_8081+"/register", user);
  }

  login(user: User):Observable<any> {
    console.log("inside login")
  token=this.httpClient.post(url_8081+"/login",user);
  return token;
  }



}
