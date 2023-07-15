import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private is:InsertService,private router:Router) { }

  ngOnInit(): void {
  }
  deleteDetail(insert1:any){
    this.is.deleteLaptop(insert1.value).subscribe();
    alert("successfully delete!!");
    this.router.navigateByUrl('/cake');
  }
  
}