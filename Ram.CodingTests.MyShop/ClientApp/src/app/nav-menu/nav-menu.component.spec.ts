import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material";
import { Product } from "../models/product";
import { ProductTypeEnum } from "../models/product-type-enum";
import { NavMenuComponent } from "./nav-menu.component";
import { RouterTestingModule } from '@angular/router/testing';
import { ShoppingCartService } from "../services/shopping-cart-service/shopping-cart.service";
import { MockShoppingCartService } from "../services/shopping-cart-service/mock-shopping-cart.service";

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  let mockProduct: Product = { id: 1, name: 'Apple', description: 'test description', price: 6, type: ProductTypeEnum.Fruit }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavMenuComponent],
      providers: [
        { provide: ShoppingCartService, useClass: MockShoppingCartService }],
      imports: [MatIconModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should get shopping cart data and update count', () => {
    const shoppingCartService: ShoppingCartService = TestBed.get(ShoppingCartService);

    component.ngOnInit();
      
    shoppingCartService.getShoppingCartStatus.subscribe((products) =>
    {
      expect(products).toEqual([{id:1, name:'Orange', description: 'Fruit', price: 6, type: ProductTypeEnum.Fruit}]);
      expect(component.shoppingCartProductsCount).toBe(products.length);
    })
  });

  it('ngOnDestroy should unsubscribe subscription', () => {
    
    spyOn(component.subscription, 'unsubscribe');

    component.ngOnDestroy();

    expect(component.subscription.unsubscribe).toHaveBeenCalled();

  });


});