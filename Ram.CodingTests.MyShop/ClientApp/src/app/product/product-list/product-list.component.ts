import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(public productService: ProductService) {}

  ngOnInit() {
    //todo: handle error and display user friendly message on the screen
    this.productService.getProducts().subscribe(
      (response) => { this.products = response; },
    (error) => { console.log(error);  });
  }

}
