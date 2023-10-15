import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WashPacks } from '../models/wash-packs';
import { api } from 'src/assets/url/api';
import { Observable } from 'rxjs';

const url=`${api.URL_ADMIN}`;
@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http:HttpClient) { }

  getWashPacks():Observable<WashPacks[]> {
    console.log("inside userservice washpack");
    return this.http.get<WashPacks[]>(url+"/findAllWashPack");
  }
}
