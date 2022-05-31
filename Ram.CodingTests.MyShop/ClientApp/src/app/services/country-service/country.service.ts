import { Injectable } from '@angular/core';
import { Country } from 'src/app/models/country';
import { HttpClientService } from '../http-client-service/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _httpService: HttpClientService) {}

  getCountries() {
    return this._httpService
      .get<Country[]>('api/country');
  }
}
