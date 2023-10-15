import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-add-washer',
  templateUrl: './add-washer.component.html',
  styleUrls: ['./add-washer.component.css']
})
export class AddWasherComponent {

user:User=new User();

constructor(private securityService:SecurityService) {
}

addWasher(){
  this.user.role="WASHER";
    console.log(this.user);
  this.securityService.signup(this.user).subscribe(data=>{
    alert("Added Successfully");
    window.location.reload();
  },error=>console.log(error.error.text));
}

}
