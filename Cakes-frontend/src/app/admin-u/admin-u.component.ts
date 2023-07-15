import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-admin-u',
  templateUrl: './admin-u.component.html',
  styleUrls: ['./admin-u.component.css']
})
export class AdminUComponent implements OnInit {

  constructor(private is:InsertService) { }

  ngOnInit(): void {
  }

}
