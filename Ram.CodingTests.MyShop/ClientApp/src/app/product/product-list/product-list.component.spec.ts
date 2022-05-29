import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { ProductTypeEnum } from '../../models/product-type-enum';
import { MockProductService } from '../../services/product-service/mock-product.service';
import { ProductService } from '../../services/product-service/product.service';
import { ProductComponent } from '../product/product.component';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent, MockComponent(ProductComponent)],
      providers: [
        { provide: ProductService, useClass: MockProductService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnint should load products', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.products).toEqual([{ id: 1, name: 'Apple', description: 'test description', price: 6, type: ProductTypeEnum.Fruit },
    { id: 1, name: 'Carrot', description: 'test description', price: 5, type: ProductTypeEnum.Vegetable }]);
  });

});
