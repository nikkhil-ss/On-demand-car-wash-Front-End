import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  constructor() { }
  public setRoles(roles:any){
    localStorage.setItem('roles',roles)
  }
  public getRoles():any{
    return (localStorage.getItem('roles'));
  }

  public setToken(token:string){
    localStorage.setItem('token',token);
  }

  public getToken():any{
    return localStorage.getItem('token');
  }

  public clear(){
    localStorage.clear();
  }
  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }
  public setUser(email:any){
    localStorage.setItem('email',email);
  }
  public getUser():any{
    return  localStorage.getItem("email");
  }



}
