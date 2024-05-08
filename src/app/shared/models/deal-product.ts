import { Deals } from "./deals";

export class DealProduct {
    id!: string;

    dealPrice!: number;
  
    dealQuantity!: number;
  
    product!: any;
  
    deal!: Deals | string;
  
    createdAt!: Date;
  
    updatedAt!: Date;
}