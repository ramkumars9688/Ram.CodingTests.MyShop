import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Country } from 'src/app/models/country';

@Injectable({
  providedIn: 'root'
})
export class MockCountryService {

  constructor() { }

  getCountries() {
    let countries: Country[] = [{ code: 'AU', name: 'Australia', currency: { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' }},
    { code: 'NZ', name: 'New Zealand', currency: { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' } }];
    return of(countries);
  }
}
