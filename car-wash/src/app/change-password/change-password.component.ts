import { Component,OnInit } from '@angular/core';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  oldPassword:any;
  newPassword:any;
  
  
  constructor(private securityService:SecurityService){}
  ngOnInit(): void {
   
  }

 
  change(){
    const jsonData = {
      "oldPassword": this.oldPassword,
      "newPassword": this.newPassword
    }
  
    console.log("chanhe Pass set",jsonData);
    this.securityService.changePassword(jsonData).subscribe(data=>{
      alert(data);
    },error=>{
      console.log(error)
    });
   


    
  }
}