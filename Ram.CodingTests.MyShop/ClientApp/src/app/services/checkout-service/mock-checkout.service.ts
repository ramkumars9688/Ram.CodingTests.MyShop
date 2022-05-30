import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/order';

@Injectable({
  providedIn: 'root'
})
export class MockCheckoutService {

  constructor() { }

  placeOrder(order: Order) {
  }

}
