import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MockShoppingCartService } from './services/shopping-cart-service/mock-shopping-cart.service';
import { ShoppingCartService } from './services/shopping-cart-service/shopping-cart.service';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, MockComponent(NavMenuComponent) ],
      providers: [
        { provide: ShoppingCartService, useClass: MockShoppingCartService }],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should refreshCart on load', () => {
    const shoppingCartService: ShoppingCartService = TestBed.get(ShoppingCartService);
    spyOn(shoppingCartService,'refreshCart').and.callThrough();

    component.ngOnInit();

    expect(shoppingCartService.refreshCart).toHaveBeenCalled();
  });

});
