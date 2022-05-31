import { Injectable } from '@angular/core';
import { ProductTypeEnum } from 'src/app/models/product-type-enum';

@Injectable({
  providedIn: 'root'
})
export class MockSessionStorageService {

  public setItem(key: string, data: any): void {

  }

  public getItem(key: string): any {

    return [{id: 1, name: 'Orange', description: 'Fruit', price: 6, type: ProductTypeEnum.Fruit, quantity: 1}];
  }

  public removeItem(key: string): void {

  }

}
