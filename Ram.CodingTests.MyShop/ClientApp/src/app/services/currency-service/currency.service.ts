import { Injectable } from '@angular/core';
import { $ } from 'protractor';
import { HttpClientService } from '../http-client-service/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private _httpService: HttpClientService) {}

  getConversionFactor(toCurrency: string) {
    return this._httpService
      .get<number>('api/currency/conversion?toCurrency=' + toCurrency);
  }
}
