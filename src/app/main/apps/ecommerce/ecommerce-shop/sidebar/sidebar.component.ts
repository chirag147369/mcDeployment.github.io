import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ecommerce-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../ecommerce-shop.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EcommerceSidebarComponent  {
  // Public
  public sliderPriceValue = [1, 6];

  constructor() {}

  
}
