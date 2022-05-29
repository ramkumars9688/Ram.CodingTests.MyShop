import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Product } from 'src/app/models/product';
import { ProductTypeEnum } from 'src/app/models/product-type-enum';

@Injectable({
  providedIn: 'root'
})
export class MockShoppingCartService {
  private shoppingCartStatus = new BehaviorSubject<Product[]>([{id:1, name:'Orange', description: 'Fruit', price: 6, type: ProductTypeEnum.Fruit}]);
  public getShoppingCartStatus = this.shoppingCartStatus.asObservable();

  addToCart(product:Product)
  {
    
  }

}
