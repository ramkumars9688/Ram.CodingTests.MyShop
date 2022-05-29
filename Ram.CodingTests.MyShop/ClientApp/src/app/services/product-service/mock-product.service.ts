import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { Product } from "../../models/product";
import { ProductTypeEnum } from "../../models/product-type-enum";

@Injectable({
  providedIn: 'root'
})
export class MockProductService {

  products: Product[] = [{ id: 1, name: 'Apple', description: 'test description', price: 6, type: ProductTypeEnum.Fruit },
  { id: 1, name: 'Carrot', description: 'test description', price: 5, type: ProductTypeEnum.Vegetable }];

  getProducts(): Observable<Product[]> {
    return of(this.products);

  }
}

