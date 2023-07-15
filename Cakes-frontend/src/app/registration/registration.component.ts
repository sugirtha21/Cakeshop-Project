import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private is:InsertService,private router:Router) { }

  ngOnInit(): void {
  }
  insertdetail(insert1:any){
    this.is.insertService(insert1.value).subscribe();
    alert("Successfully registered!!");

   
  }
  

btnclick(){
  this.router.navigateByUrl('/home');
}

}