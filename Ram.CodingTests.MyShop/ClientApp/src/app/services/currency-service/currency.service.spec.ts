import { TestBed } from '@angular/core/testing';
import { HttpClientService } from '../http-client-service/http-client.service';
import { MockHttpClientService } from '../http-client-service/mock-http-client.service';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClientService, useClass: MockHttpClientService }
    ]
  }));

  it('should be created', () => {
    const service: CurrencyService = TestBed.get(CurrencyService);
    expect(service).toBeTruthy();
  });
  //Todo: To add additional tets if I have time at the end
});
