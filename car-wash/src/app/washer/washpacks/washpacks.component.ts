import { Component, OnInit } from '@angular/core';
import { WashPacks } from 'src/app/models/wash-packs';
import { WasherService } from 'src/app/services/washer.service';

@Component({
  selector: 'app-washpacks',
  templateUrl: './washpacks.component.html',
  styleUrls: ['./washpacks.component.css']
})
export class WashpacksComponent implements OnInit {
WashPack: Array<WashPacks>=[];
constructor(private washerService:WasherService){}
ngOnInit(): void {
  this.getWashPacks();
}
getWashPacks(){
  this.washerService.getWashPacks().subscribe(data=>{
    this.WashPack=data;
    console.log(data);
  })
}
}
