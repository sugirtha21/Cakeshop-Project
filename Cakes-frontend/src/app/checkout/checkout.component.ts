import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private is:InsertService) { }

  ngOnInit(): void {
  }

}
