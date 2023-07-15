import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cake2',
  templateUrl: './cake2.component.html',
  styleUrls: ['./cake2.component.css']
})
export class Cake2Component implements OnInit {

  constructor(private is:InsertService,private router:Router) { }

  ngOnInit(): void {
  }
  addDetail(insert1:any){
    this.is.insertLaptop(insert1.value).subscribe();
    alert("successfully added");
    this.router.navigateByUrl('/cake');
 }

}
