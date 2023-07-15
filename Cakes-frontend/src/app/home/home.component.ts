import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}

  public product = [
    {
      image1: "assets/img/product/product1.jpg",
      image2: "assets/img/product/product2.jpg",
      name: "Birthday Cakes",
      type: "Cakes",
      current_price: 226.00,
      old_price: 362.00
    },
    {
      image1: "assets/img/product/product3.jpg",
      image2: "assets/img/product/product4.jpg",
      name: "Chocolate Cakes",
      type: "Cakes",
      current_price: 146.00,
      old_price: 282.00
    },
    {
      image1: "assets/img/product/product5.jpg",
      image2: "assets/img/product/product6.jpg",
      name: "Strawberry Cake",
      type: "Cakes",
      current_price: 256.00,
      old_price: 362.00
    },
    {
      image1: "assets/img/product/product1.jpg",
      image2: "assets/img/product/product2.jpg",
      name: "Wedding Cake",
      type: "Cakes",
      current_price: 226.00,
      old_price: 362.00
    },
    {
      image1: "assets/img/product/product3.jpg",
      image2: "assets/img/product/product4.jpg",
      name: "Customized Cakes",
      type: "Cakes",
      current_price: 286.00,
      old_price: 382.00
    },
    {
      image1: "assets/img/product/product5.jpg",
      image2: "assets/img/product/product6.jpg",
      name: "Vennila Cake",
      type: "Cakes",
      current_price: 156.00,
      old_price: 262.00
    },
    {
      image1: "assets/img/product/product1.jpg",
      image2: "assets/img/product/product2.jpg",
      name: "Party Cake",
      type: "Cakes",
      current_price: 246.00,
      old_price: 362.00
    },
    {
      image1: "assets/img/product/product3.jpg",
      image2: "assets/img/product/product4.jpg",
      name: "Donec Non Est",
      type: "Cakes",
      current_price: 246.00,
      old_price: 382.00
    },
    {
      image1: "assets/img/product/product5.jpg",
      image2: "assets/img/product/product6.jpg",
      name: "Mauris Vel Tellus",
      type: "Cakes",
      current_price: 356.00,
      old_price: 362.00
    },
    {
      image1: "assets/img/product/product1.jpg",
      image2: "assets/img/product/product2.jpg",
      name: "Aliquam Consequat",
      type: "Cakes",
      current_price: 216.00,
      old_price: 362.00
    },
    {
      image1: "assets/img/product/product3.jpg",
      image2: "assets/img/product/product4.jpg",
      name: "Donec Non Est",
      type: "Cakes",
      current_price: 246.00,
      old_price: 382.00
    },
    {
      image1: "assets/img/product/product5.jpg",
      image2: "assets/img/product/product6.jpg",
      name: "Mauris Vel Tellus",
      type: "Cakes",
      current_price: 196.00,
      old_price: 362.00
    }
  ];

  bannerSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 3000,
    animateOut: 'fadeOut',
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  cardSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: [
      '<i class="owl-nav owl-prev ion-ios-arrow-left"></i>',
      '<i class="owl-nav owl-next ion-ios-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };

  staticSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      '<i class="owl-nav owl-prev ion-ios-arrow-left"></i>',
      '<i class="owl-nav owl-next ion-ios-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 3,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: false,
  };
}
