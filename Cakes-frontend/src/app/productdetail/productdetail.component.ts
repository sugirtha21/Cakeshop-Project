import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  public productList : any ;
  public totalItem : number =0;


  constructor(private api:ApiService, private cart:CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
        this.productList = res;
        this.productList.forEach((a:any)=> {
          Object.assign(a,{quantity:1,total:a.price});
          
        });
    })
    this.cart.getproducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  addtocart(item:any){
    this.cart.addtocart(item);

  }
  

}
