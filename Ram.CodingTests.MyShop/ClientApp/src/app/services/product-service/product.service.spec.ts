import { async, getTestBed, TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { ProductTypeEnum } from '../../models/product-type-enum';
import { HttpClientService } from '../http-client-service/http-client.service';
import { MockHttpClientService } from '../http-client-service/mock-http-client.service';

describe('ProductService', () => {
  let service: ProductService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide:HttpClientService, useClass: MockHttpClientService }
      ]
    });
    const testbed = getTestBed();
    service = testbed.get(ProductService);

  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products', () => {
    service.getProducts().subscribe(data => {
      expect(data).toEqual([{id:1, name: 'Apple', description: 'test description', price: 6, type : ProductTypeEnum.Fruit},
      {id:1, name: 'Carrot', description: 'test description', price: 5, type : ProductTypeEnum.Vegetable}])
    });
  });

});
