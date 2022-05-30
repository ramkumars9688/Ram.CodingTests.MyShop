import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client-service/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class MockShippingService {

  constructor() { }

  getShippingCost(orderTotal: number) {
    return 20;
  }
}
