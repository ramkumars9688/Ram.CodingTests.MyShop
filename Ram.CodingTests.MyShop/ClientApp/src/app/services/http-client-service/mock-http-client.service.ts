import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../../models/product';
import { ProductTypeEnum } from '../../models/product-type-enum';

@Injectable({
  providedIn: 'root'
})
export class MockHttpClientService {

  products : Product[]= [{id:1, name: 'Apple', description: 'test description', price: 6, type : ProductTypeEnum.Fruit},
  {id:1, name: 'Carrot', description: 'test description', price: 5, type : ProductTypeEnum.Vegetable}];
  
  get<T>(path: string) {
    return of(this.products);
  }

}
