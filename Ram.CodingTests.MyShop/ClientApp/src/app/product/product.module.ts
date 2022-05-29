import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: ProductListComponent }
];

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class ProductModule { }
