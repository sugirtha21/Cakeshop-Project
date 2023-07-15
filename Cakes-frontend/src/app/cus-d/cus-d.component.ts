import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-cus-d',
  templateUrl: './cus-d.component.html',
  styleUrls: ['./cus-d.component.css']
})
export class CusDComponent implements OnInit {

  constructor(private is:InsertService) { }

  ngOnInit(): void {
  }

}
