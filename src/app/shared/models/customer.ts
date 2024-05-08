import { Adress } from "./adress";
import { Cart } from "./cart";
import { Order } from "./order";
import { ProductReview } from "./product-review";
import { User } from "./user";

export class Customer extends User {

    questions?: any[] | string[];

    offers?: any[] | string[];
  
    adresses?: Adress[] | string[];
  
    orders?: Order[] | string[];
  
    wishLists?: any[];
  
    cart?: Cart;
  
    accountGiftCard?: any;
  
    responses?: any[] | string[];
  
    savedItems?: any;
  
    productReviews?: ProductReview[] | string[];
  
    registries?: any[];
  
    ideaLists?: any[];
  
    productViewHistories?: any[] | string[];
  
    role?: string;
}
