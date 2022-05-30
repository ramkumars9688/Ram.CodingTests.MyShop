import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartProduct } from '../models/shopping-cart-product';
import { User } from '../models/user';
import { CheckoutService } from '../services/checkout-service/checkout.service';
import { ShoppingCartService } from '../services/shopping-cart-service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts: ShoppingCartProduct[];
  user: User;

  constructor(private _shoppingCartService: ShoppingCartService,
    private _checkoutService: CheckoutService,
    private _router: Router) {

  }

  ngOnInit() {
    this.cartProducts = this._shoppingCartService.getCartData()
  }

  placeOrder() {
    if (this.cartProducts) {
      this._checkoutService.
      placeOrder({ shoppingCartItems: this.cartProducts, totalAmount: this.orderTotal, currency: 'AUD', user: { email: this.user.email } })
      .subscribe(order => {
        this._shoppingCartService.clear();
        this._router.navigateByUrl('order-confirmation/'+order.orderId);
      });
    }
  }

  onUserDataChange()
  {
    console.log(this.user);
  }

  get orderTotal(): number {
    return this.cartProducts ? this.cartProducts.reduce((acc, val) => acc += val.quantity * val.price, 0) : 0;
  }

  get isCartReadyForSubmit()
  {
    return this.user && this.user.email && this.user.country && this.cartProducts && this.cartProducts.length > 0 && 
    this.cartProducts.every(product => product.id > 0 && product.quantity > 0 && this.orderTotal > 0);
  }

}
