import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s-list',
  templateUrl: './s-list.component.html',
  styleUrls: ['./s-list.component.css']
})
export class SListComponent implements OnInit {

  constructor(private is: InsertService,private router:Router) { 
    
   }
   ngOnInit(): void {
   }

   
 
   
  
 }
 
