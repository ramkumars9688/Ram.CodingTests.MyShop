import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Product } from 'src/app/models/product';
import { ShoppingCartProduct } from 'src/app/models/shopping-cart-product';
import { environment } from 'src/environments/environment';
import { SessionStorageService } from '../session-storage-service/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCartStatus = new BehaviorSubject<ShoppingCartProduct[]>(null);
  public getShoppingCartStatus$ = this.shoppingCartStatus.asObservable();

  constructor(private _sessionStorageService: SessionStorageService) { }

  addToCart(product: Product) {

    let cartProducts:ShoppingCartProduct[] = this._sessionStorageService.getItem(environment.cartStorageKey);
    
    if (!cartProducts) {
      cartProducts = [];
    }

    let matchedProduct = cartProducts.find(cartProduct => cartProduct.id == product.id);

    if(matchedProduct)
    {
      matchedProduct.quantity += 1;
    }
    else
    {
      let cartProduct: ShoppingCartProduct = <ShoppingCartProduct>product;
      cartProduct.quantity = 1;
      cartProducts.push(cartProduct)
    }

    this._sessionStorageService.setItem(environment.cartStorageKey, cartProducts);
    this.shoppingCartStatus.next(cartProducts);
  }

  refreshCart() {

    let products = [];
    let storedProducts = this._sessionStorageService.getItem(environment.cartStorageKey);
    if (storedProducts) {
      products = storedProducts;
    }
    this.shoppingCartStatus.next(products);
  }

  getCartData(): ShoppingCartProduct[]
  {
    return this.shoppingCartStatus.getValue();
  }

}
