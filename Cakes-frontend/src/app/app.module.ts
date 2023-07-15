import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreComponent } from './core/core.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShopComponent } from './shop/shop.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContacUsComponent } from './contac-us/contac-us.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminUComponent } from './admin-u/admin-u.component';
import { CusDComponent } from './cus-d/cus-d.component';
import { OrderDComponent } from './order-d/order-d.component';
import { ViewuserComponent } from './view-user/view-user.component';
import { CusAComponent } from './cus-a/cus-a.component';
import { SListComponent } from './s-list/s-list.component';
import { MiddleComponent } from './middle/middle.component';
import { RegistrationComponent } from './registration/registration.component';
import { CakeComponent } from './cake/cake.component';
import { Cake2Component } from './cake2/cake2.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    WishlistComponent,
    ShopComponent,
    ProductdetailComponent,
    AboutUsComponent,
    ContacUsComponent,
    AdminComponent,
    CustomerComponent,
    AdminUComponent,
    ViewuserComponent, 
    CusDComponent,
    OrderDComponent,
    CusAComponent,
    SListComponent,
    MiddleComponent,
    RegistrationComponent,
    CakeComponent,
    Cake2Component,
    DeleteComponent,




  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
