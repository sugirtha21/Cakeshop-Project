import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-d',
  templateUrl: './order-d.component.html',
  styleUrls: ['./order-d.component.css']
})
export class OrderDComponent implements OnInit {

  constructor(private is: InsertService,private router:Router) { 
    this.viewPayments();
   }
   ngOnInit(): void {
   }

   listData:any;
   viewPayments(){
     this.is.viewPayment().subscribe((result:any)=>{this.listData=result;})
   }
   
  
 }
