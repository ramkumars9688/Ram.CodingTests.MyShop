import { Product } from "./product";
import { ProductTypeEnum } from "./product-type-enum";

export class ShoppingCartProduct implements Product {
    id: number;
    name: string;
    description: string;
    type: ProductTypeEnum;
    price: number;
    quantity: number;
}


