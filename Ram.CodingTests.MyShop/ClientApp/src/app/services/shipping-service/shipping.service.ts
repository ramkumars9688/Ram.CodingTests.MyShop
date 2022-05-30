import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client-service/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private _httpService: HttpClientService) { }

  getShippingCost(orderTotal: number) {
    return this._httpService
      .get<number>('api/shipping/cost?orderTotal=' + orderTotal);
  }
}
