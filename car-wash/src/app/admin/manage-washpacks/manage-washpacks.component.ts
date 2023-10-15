import { Component } from '@angular/core';
import { WashPacks } from 'src/app/models/wash-packs';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-washpacks',
  templateUrl: './manage-washpacks.component.html',
  styleUrls: ['./manage-washpacks.component.css']
})
export class ManageWashpacksComponent {
  
  WashPack: Array<WashPacks>=[];
  constructor(private adminService:AdminService){}
    ngOnInit(): void {
      this.getWashPacks();
    }

  getWashPacks(){
    this.adminService.getWashPacks().subscribe(data=>{
      this.WashPack=data;
      console.log("Inside getWashPack",data);
    })
  }
}
