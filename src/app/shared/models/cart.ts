import { CartItem } from "./cart-item";
import { Customer } from "./customer";

export class Cart{
    id!: string;
  
    cartItems?: CartItem[] | string[];
  
    client?: Customer | string;
  
    createdAt!: Date;

    updatedAt!: Date;
}