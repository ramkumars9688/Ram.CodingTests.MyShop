import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../models/country';
import { ShoppingCartProduct } from '../models/shopping-cart-product';
import { User } from '../models/user';
import { CheckoutService } from '../services/checkout-service/checkout.service';
import { CountryService } from '../services/country-service/country.service';
import { CurrencyService } from '../services/currency-service/currency.service';
import { ShippingService } from '../services/shipping-service/shipping.service';
import { ShoppingCartService } from '../services/shopping-cart-service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts: ShoppingCartProduct[];
  user: User;

  countries: Country[];
  selectedCountry: Country;
  currencyFactor = 1;
  shippingCost = 0;

  defaultCountryCode = 'AU'; // Todo: hardcoded for now, Has to configured in backend(DB or config settings)

  constructor(private _shoppingCartService: ShoppingCartService,
    private _checkoutService: CheckoutService,
    private _router: Router,
    private _countryService: CountryService,
    private _currencyService: CurrencyService,
    private _shippingService: ShippingService) {

    this._countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
      this.selectedCountry = this.countries.find(x => x.code === this.defaultCountryCode);
    });
  }

  ngOnInit() {
    this.cartProducts = this._shoppingCartService.getCartData();
    this.calculateShippingCost();
  }

  placeOrder() {
    if (this.cartProducts) {
      this._checkoutService.
        placeOrder(
          {
            shoppingCartItems: this.cartProducts,
            totalAmount: this.orderTotal + this.shippingCost,
            currency: this.selectedCountry.currency.code,
            user: { email: this.user.email }
          })
        .subscribe(order => {
          this._shoppingCartService.clear();
          this._router.navigateByUrl('order-confirmation/' + order.orderId);
        });
    }
  }

  onUserDataChange() {

    if (!this.user.country || this.selectedCountry.code === this.user.country.code) {
      return;
    }
    this.selectedCountry = this.user.country;

    if (this.selectedCountry.code === this.defaultCountryCode) {
      this.currencyFactor = 1;
      return;
    }

    this._currencyService.getConversionFactor(this.selectedCountry.currency.code).subscribe((factor) => {
      this.currencyFactor = factor;
    });

    this.calculateShippingCost();

  }

  removeProduct(cartProduct: ShoppingCartProduct) {
    if (this._shoppingCartService.removeCartItem(cartProduct.id)) {
      this.cartProducts = this._shoppingCartService.getCartData();
      this.calculateShippingCost();
    }
  }

  removeAll() {
    this._shoppingCartService.clear();
    this.cartProducts = this._shoppingCartService.getCartData();
    this.calculateShippingCost();
  }

  calculateShippingCost() {
    if (this.orderTotal === 0) {
      this.shippingCost = 0;
      return;
    }

    this._shippingService.getShippingCost(this.orderTotal).subscribe((cost) => {
      this.shippingCost = cost;
    });
  }

  get orderTotal(): number {
    return this.cartProducts ? this.cartProducts.reduce((acc, val) => acc += this.currencyFactor * val.quantity * val.price, 0) : 0;
  }

  get isCartReadyForSubmit() {
    return this.user && this.user.email && this.user.country && this.cartProducts && this.cartProducts.length > 0 &&
      this.cartProducts.every(product => product.id > 0 && product.quantity > 0 && this.orderTotal > 0);
  }

}
