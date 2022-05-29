import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Product } from 'src/app/models/product';
import { ProductTypeEnum } from 'src/app/models/product-type-enum';
import { ShoppingCartProduct } from 'src/app/models/shopping-cart-product';

@Injectable({
  providedIn: 'root'
})
export class MockShoppingCartService {
  private shoppingCartStatus = new BehaviorSubject<ShoppingCartProduct[]>([{ id: 1, name: 'Orange', description: 'Fruit', price: 6, type: ProductTypeEnum.Fruit, quantity: 2 },
  { id: 2, name: 'Apple', description: 'Fruit', price: 6, type: ProductTypeEnum.Fruit, quantity: 5 },
  { id: 2, name: 'Carrot', description: 'Fruit', price: 5, type: ProductTypeEnum.Fruit, quantity: 1 }]);
  public getShoppingCartStatus$ = this.shoppingCartStatus.asObservable();

  addToCart(product: Product) {

  }

  refreshCart()
  {
    
  }

}
