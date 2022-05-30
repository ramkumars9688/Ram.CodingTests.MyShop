import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';
import { CheckoutService } from '../services/checkout-service/checkout.service';
import { MockCheckoutService } from '../services/checkout-service/mock-checkout.service';
import { CountryService } from '../services/country-service/country.service';
import { MockCountryService } from '../services/country-service/mock-country.service';
import { CurrencyService } from '../services/currency-service/currency.service';
import { MockCurrencyService } from '../services/currency-service/mock-currency.service';
import { MockShoppingCartService } from '../services/shopping-cart-service/mock-shopping-cart.service';
import { ShoppingCartService } from '../services/shopping-cart-service/shopping-cart.service';
import { UserComponent } from '../user/user.component';
import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent, MockComponent(UserComponent) ],
      providers: [
        { provide:ShoppingCartService, useClass: MockShoppingCartService },
        { provide:CheckoutService, useClass: MockCheckoutService },
        { provide:CountryService, useClass: MockCountryService },
        { provide:CurrencyService, useClass: MockCurrencyService }
      ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Todo: Add additional tests when I have time
});
