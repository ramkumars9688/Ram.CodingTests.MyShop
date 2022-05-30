import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { CheckoutService } from '../services/checkout-service/checkout.service';
import { MockCheckoutService } from '../services/checkout-service/mock-checkout.service';
import { MockShoppingCartService } from '../services/shopping-cart-service/mock-shopping-cart.service';
import { ShoppingCartService } from '../services/shopping-cart-service/shopping-cart.service';
import { ShoppingCartItemComponent } from '../shopping-cart-item/shopping-cart-item.component';
import { UserComponent } from '../user/user.component';
import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent, MockComponent(ShoppingCartItemComponent), MockComponent(UserComponent) ],
      providers: [
        { provide:ShoppingCartService, useClass: MockShoppingCartService },
        { provide:CheckoutService, useClass: MockCheckoutService }
      ]
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
