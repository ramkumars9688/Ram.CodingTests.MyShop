import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';
import { SessionStorageService } from '../session-storage-service/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCartStatus = new BehaviorSubject<Product[]>(null);
  public getShoppingCartStatus = this.shoppingCartStatus.asObservable();
  
  constructor(private _sessionStorageService: SessionStorageService) { }

  addToCart(product:Product)
  {
    let products = [];
    let storedProducts = this._sessionStorageService.getItem(environment.cartStorageKey);
    if(storedProducts)
    {
      products = storedProducts;
    }
    products.push(product);

    this._sessionStorageService.setItem(environment.cartStorageKey, products);
    this.shoppingCartStatus.next(products);

  }




}
