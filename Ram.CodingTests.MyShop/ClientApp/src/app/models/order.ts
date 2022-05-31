
import { ShoppingCartProduct } from './shopping-cart-product';
import { User } from './user';

export class Order {
    shoppingCartItems: ShoppingCartProduct[];
    totalAmount: number;
    currency: string;
    user: User;
}
