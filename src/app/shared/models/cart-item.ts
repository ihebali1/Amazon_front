import { Cart } from "./cart";
import { Product } from "./product";

export class CartItem {
    id!: string;

    quantity!: number;
  
    cart?: Cart | string;
  
    product?: Product | string;
  
    createdAt!: Date;
  
    updatedAt!: Date;
}