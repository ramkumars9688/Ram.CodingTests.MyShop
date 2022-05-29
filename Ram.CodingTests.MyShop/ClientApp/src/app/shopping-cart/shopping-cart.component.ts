import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../services/shopping-cart-service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts: Product[];
  
  constructor(private _shoppingCartService: ShoppingCartService) {

  }

  ngOnInit() {
    this.cartProducts = this._shoppingCartService.getCartData()
  }

}
