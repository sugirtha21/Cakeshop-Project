import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  constructor(private is:InsertService,private router:Router){
    this.viewLaptop();
    
  }
      ngOnInit(): void {
    }
   
   listData:any;
   viewLaptop(){
     this.is.viewLaptops().subscribe((resp:any)=>{this.listData=resp;})
   }  
}


