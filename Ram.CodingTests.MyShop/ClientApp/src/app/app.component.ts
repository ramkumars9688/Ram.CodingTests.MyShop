import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart-service/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    this._shoppingCartService.refreshCart();
  }
}
