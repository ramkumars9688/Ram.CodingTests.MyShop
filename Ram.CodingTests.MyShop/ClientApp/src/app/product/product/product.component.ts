import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart-service/shopping-cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private _shoppingCartService: ShoppingCartService) {
   }

  ngOnInit() { 
  }

  addToCart()
  {
    this._shoppingCartService.addToCart(this.product);
  }

}
