import { ProductTypeEnum } from './product-type-enum';

export interface Product {
    id: number;
    name: string;
    description: string;
    type: ProductTypeEnum;
    price: number;
}


