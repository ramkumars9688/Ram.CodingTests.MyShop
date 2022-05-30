import { TestBed } from '@angular/core/testing';
import { HttpClientService } from '../http-client-service/http-client.service';
import { MockHttpClientService } from '../http-client-service/mock-http-client.service';

import { CountryService } from './country.service';

describe('CountryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClientService, useClass: MockHttpClientService }
    ]
  }));

  it('should be created', () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });
  //Todo: To add tests if I have time at the end
});
