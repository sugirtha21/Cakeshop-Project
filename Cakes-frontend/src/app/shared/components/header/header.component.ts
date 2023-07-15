import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse() {
    let element = document.getElementsByClassName('categories_menu_toggle') as HTMLCollectionOf<HTMLElement>;
    if(!this.active) {
      element[0].style.display = "block";
      this.active=true;
    } else {
      element[0].style.display = "none";
      this.active=false;
    }
  }

}
