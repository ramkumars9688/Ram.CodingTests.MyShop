import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartProduct } from '../models/shopping-cart-product';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() cartProduct: ShoppingCartProduct;

  constructor() { }

  ngOnInit() {
  }

}
