import { WishlistComponent } from './wishlist/wishlist.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ContacUsComponent } from './contac-us/contac-us.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminUComponent } from './admin-u/admin-u.component';
import { ViewuserComponent } from './view-user/view-user.component';
import { CusDComponent } from './cus-d/cus-d.component';
import { OrderDComponent } from './order-d/order-d.component';
import { CusAComponent } from './cus-a/cus-a.component';
import { SListComponent } from './s-list/s-list.component';
import { MiddleComponent } from './middle/middle.component';
import { RegistrationComponent } from './registration/registration.component';
import { CakeComponent } from './cake/cake.component';
import { Cake2Component } from './cake2/cake2.component';
import { DeleteComponent } from './delete/delete.component';
const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"home/admin", component:AdminComponent},
  {path:"cart", component:CartComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"wishlist", component:WishlistComponent},
  {path:"home/shop", component:ShopComponent},
  {path:"home/aboutus", component:AboutUsComponent},
  {path:"productdetail", component:ProductdetailComponent},
  {path:"home/contactus", component:ContacUsComponent},
  {path:"home/customer", component:CustomerComponent},
  {path:"admin-u", component:AdminUComponent},
  {path:"cus-d", component:CusDComponent},
  {path:"order-d", component:OrderDComponent},
  {path:"s-list",component:SListComponent},
  {path:"middle",component:MiddleComponent},
  {path:"cus-a",component:CusAComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"view-user",component:ViewuserComponent},
  {path:"cake",component:CakeComponent},
  {path:"cake2",component:Cake2Component},
  {path:"delete",component:DeleteComponent},
  
  {path:"", redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
