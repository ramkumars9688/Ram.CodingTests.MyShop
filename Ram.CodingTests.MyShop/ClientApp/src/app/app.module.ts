import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProductModule } from './product/product.module';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ProductModule,
    MatIconModule,
    MatBadgeModule,
    RouterModule.forRoot([
      { path: '', loadChildren: './product/product.module#ProductModule', pathMatch: 'full' },
      { path: 'shopping-cart', loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartModule', pathMatch: 'full' },
      { path: 'order-confirmation/:orderId', component: OrderConfirmationComponent, pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
