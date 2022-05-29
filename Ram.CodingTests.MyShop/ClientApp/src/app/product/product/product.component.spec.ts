import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockShoppingCartService } from 'src/app/services/shopping-cart-service/mock-shopping-cart.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart-service/shopping-cart.service';
import { Product } from '../../models/product';
import { ProductTypeEnum } from '../../models/product-type-enum';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  let mockProduct: Product = { id: 1, name: 'Apple', description: 'test description', price: 6, type: ProductTypeEnum.Fruit }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      providers: [
        { provide: ShoppingCartService, useClass: MockShoppingCartService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnit should display product', () => {
    component.ngOnInit();
    expect(component.product).toEqual(mockProduct);
    expect(fixture.debugElement.nativeElement.querySelector('.card-title').textContent).toBe(mockProduct.name);
    expect(fixture.debugElement.nativeElement.querySelector('.card-text').textContent).toBe(mockProduct.description);
    expect(fixture.debugElement.nativeElement.querySelector('.price').textContent).toBe('$'+mockProduct.price);
  });

  it('addToCart should call shoppingCartService to add the product to cart', () => {
    const shoppingCartService: ShoppingCartService = TestBed.get(ShoppingCartService);

    spyOn(shoppingCartService,'addToCart').and.callThrough();
    spyOn(component, 'addToCart').and.callThrough();
    
    fixture.debugElement.nativeElement.querySelector('#btnAddToCart').click();
    
    expect(component.addToCart).toHaveBeenCalled();
    expect(shoppingCartService.addToCart).toHaveBeenCalled();
  });

});

