import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { api } from 'src/assets/url/api';
import { UserauthService } from './userauth.service';

const url_8081 = `${api.URL_SECURITY}`;

let token:any;
@Injectable({
  providedIn: 'root'
})
export class SecurityService {


  constructor(private httpClient: HttpClient,private userAuthService:UserauthService) { }

  signup(user: User): Observable<any> {
    console.log("inside signup service",user);
    return this.httpClient.post(url_8081+"/register", user);
  }

  login(user: User):Observable<any> {
    console.log("inside login")
  token=this.httpClient.post<any>(url_8081+"/login",user);
  return token;
  }

  forgotPassword(user:User):Observable<Object>{
    return this.httpClient.post(url_8081+'/forgotPassword',user);
  }
  getAllUsers():Observable<User[]>{
    const auth_token=this.userAuthService.getToken();
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.httpClient.get<User[]>(url_8081+"/getAllUsers",{ headers: header })
 
  }

  changePassword(data:any):Observable<any>{
    // const values=JSON.stringify(data);
    console.log("in side change password",data);
    const auth_token=this.userAuthService.getToken();
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.httpClient.post(url_8081+"/changePassword",data,{ headers: header })
 
  }

  getWasherList():Observable<User[]>{
    const auth_token=this.userAuthService.getToken();
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.httpClient.get<any>(url_8081+"/getAllWashers",{ headers: header })
  }



  getAllWasher():Observable<any>{
    const auth_token=this.userAuthService.getToken();
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.httpClient.get<any>(url_8081+"/getAllWashers",{ headers: header })
  }

  public roleMatch(allowedRoles:String){
    let isMatch=false;
    const loggedRole=this.userAuthService.getRoles();
    // let temp='"'+allowedRoles+'"';

    if(loggedRole !=null && loggedRole){
      if(loggedRole===allowedRoles){
        isMatch=true;
        console.log("result",isMatch);
        return isMatch;
      }
      else{
        console.log("else part",isMatch);
        return isMatch;
      }
    }
    return false;
  }




}
