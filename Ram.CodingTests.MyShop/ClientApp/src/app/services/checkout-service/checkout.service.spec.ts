import { TestBed } from '@angular/core/testing';
import { ProductTypeEnum } from 'src/app/models/product-type-enum';
import { HttpClientService } from '../http-client-service/http-client.service';
import { MockHttpClientService } from '../http-client-service/mock-http-client.service';
import { CheckoutService } from './checkout.service';

describe('CheckoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClientService, useClass: MockHttpClientService }
    ]
  }));

  it('should be created', () => {
    const service: CheckoutService = TestBed.get(CheckoutService);
    expect(service).toBeTruthy();
  });

  it('should place order', () => {
    const service: CheckoutService = TestBed.get(CheckoutService);
    const httpClientService: HttpClientService = TestBed.get(HttpClientService);
    spyOn(httpClientService, 'post').and.callThrough();

    const order = { currency: 'AUD', totalAmount: 20.35, user: { email: 'test1@gmail.com' }, shoppingCartItems: [{ id: 123, price: 5.5, type: ProductTypeEnum.Fruit, name: 'Apple', quantity: 2, description: 'Fruit' }] };
    const serverOrderObj = {
      user: order.user,
      totalAmount: order.totalAmount,
      currency: order.currency,
      shoppingCartItems: [
        {
          productId: 123,
          quantity: 2
        }
      ]
    };
    service.placeOrder(order);

    httpClientService.post('api/order',serverOrderObj).subscribe(order => {
      expect(order).toEqual({id: 123456})
    });

    expect(httpClientService.post).toHaveBeenCalledWith('api/order', serverOrderObj);
  });

});
