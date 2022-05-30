import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../services/shopping-cart-service/shopping-cart.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit, OnDestroy {
  isExpanded = false;
  shoppingCartProductsCount = 0;

  subscription;

  constructor(private _shoppingCartService: ShoppingCartService) {

  }

  ngOnInit() {

    this.subscription = this._shoppingCartService.getShoppingCartStatus$.subscribe((products) => {

      this.shoppingCartProductsCount = products && products.length > 0 ?
        products.map(x => x.quantity).reduce((total, currentValue) => total + currentValue)
        : 0;
    });

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
