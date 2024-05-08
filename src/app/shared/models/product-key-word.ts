import { ParentListing } from "./parent-listing";
import { SimpleProduct } from "./simple-product";

export class ProductKeyWord {
  id!: string;

  value!: string;

  simpleProduct?: SimpleProduct | string;

  parentListing?: ParentListing | string;

  createdAt!: Date;

  updatedAt!: Date;
}
