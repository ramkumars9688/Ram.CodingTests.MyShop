import { TestBed } from '@angular/core/testing';
import { HttpClientService } from '../http-client-service/http-client.service';
import { MockHttpClientService } from '../http-client-service/mock-http-client.service';

import { ShippingService } from './shipping.service';

describe('ShippingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClientService, useClass: MockHttpClientService }
    ]
  }));

  it('should be created', () => {
    const service: ShippingService = TestBed.get(ShippingService);
    expect(service).toBeTruthy();
  });
});
