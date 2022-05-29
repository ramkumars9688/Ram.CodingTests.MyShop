import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '../../models/product';
import { ProductTypeEnum } from '../../models/product-type-enum';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  let mockProduct: Product = { id: 1, name: 'Apple', description: 'test description', price: 6, type: ProductTypeEnum.Fruit }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
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
});

