import { Injectable } from '@angular/core';
import { $ } from 'protractor';
import { HttpClientService } from '../http-client-service/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class MockCurrencyService {

  constructor() {}

  getConversionFactor(toCurrency: string)
  {
    return 0.5;
  }
}
