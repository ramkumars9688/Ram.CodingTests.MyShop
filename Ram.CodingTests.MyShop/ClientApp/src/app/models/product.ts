import { ProductTypeEnum } from "./product-type-enum";

export class Product {
    id: number;
    name: string;
    description: string;
    type: ProductTypeEnum;
    price: number;
}


