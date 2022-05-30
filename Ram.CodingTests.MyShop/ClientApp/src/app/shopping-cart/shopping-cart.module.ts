import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartItemComponent } from '../shopping-cart-item/shopping-cart-item.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  { path: '', component: ShoppingCartComponent }
];

@NgModule({
  declarations: [ShoppingCartComponent, ShoppingCartItemComponent, UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)]
  ]
})
export class ShoppingCartModule { }
