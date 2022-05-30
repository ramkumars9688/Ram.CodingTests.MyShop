import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from '../user/user.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

const routes: Routes = [
  { path: '', component: ShoppingCartComponent }
];

@NgModule({
  declarations: [ShoppingCartComponent, UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class ShoppingCartModule { }
