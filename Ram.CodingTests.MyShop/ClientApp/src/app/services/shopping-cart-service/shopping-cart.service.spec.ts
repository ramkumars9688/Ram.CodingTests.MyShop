import { TestBed } from '@angular/core/testing';
import { ProductTypeEnum } from 'src/app/models/product-type-enum';
import { MockSessionStorageService } from '../session-storage-service/mock-session-storage.service';
import { SessionStorageService } from '../session-storage-service/session-storage.service';
import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide:SessionStorageService, useClass: MockSessionStorageService }
    ]
  }));

  it('should be created', () => {
    const service: ShoppingCartService = TestBed.get(ShoppingCartService);
    expect(service).toBeTruthy();
  });

  it('should add product to cart and publish cart data', () => {
    const service: ShoppingCartService = TestBed.get(ShoppingCartService);
    const sessionStorageService: SessionStorageService = TestBed.get(SessionStorageService);
  
    spyOn(sessionStorageService, 'getItem').and.callThrough();
    spyOn(sessionStorageService, 'setItem').and.callThrough();

    service.addToCart({id:2, name:'Apple', description: 'Fruit', price: 5,type: ProductTypeEnum.Fruit});

    service.getShoppingCartStatus$.subscribe((products) => {
      expect(products).toEqual([
        {id:1, name:'Orange', description: 'Fruit', price: 6, type: ProductTypeEnum.Fruit, quantity: 1},
        {id:2, name:'Apple', description: 'Fruit', price: 5,type: ProductTypeEnum.Fruit, quantity: 1}
      ]);
    });

    expect(sessionStorageService.getItem).toHaveBeenCalled();
    expect(sessionStorageService.setItem).toHaveBeenCalled();

  });


});
