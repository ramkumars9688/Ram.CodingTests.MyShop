import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/order';
import { HttpClientService } from '../http-client-service/http-client.service';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private _httpClientService: HttpClientService) { }

  placeOrder(order: Order) {

    let objOrderServer = {
      user: order.user,
      totalAmount: order.totalAmount,
      currency: order.currency,
      shoppingCartItems: []
    };

    objOrderServer.shoppingCartItems = [];

    order.shoppingCartItems.forEach(cartItem => {
      objOrderServer.shoppingCartItems.push(
        {
          productId: cartItem.id,
          quantity: cartItem.quantity
        }
      )
    });

    return this._httpClientService.post('api/order', objOrderServer)
      .pipe(map((res: any) => res));
  }

}
