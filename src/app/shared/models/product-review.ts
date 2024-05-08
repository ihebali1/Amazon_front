import { Customer } from "./customer";
import { ParentListing } from "./parent-listing";
import { SimpleProduct } from "./simple-product";

export class ProductReview {
    id!: string;
  
    content!: string;
  
    rating!: number;
  
    createdAt!: Date;
  
    updatedAt!: Date;
  
    client?: Customer | string;
  
    simpleProduct?: SimpleProduct | string;
  
    parentListing?: ParentListing | string;
}