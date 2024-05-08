import { Customer } from "./customer";
import { Vendor } from "./vendor";

export class PromotinalOffer {
    id!: number;
  
    startDate!: Date;
  
    endDate!: Date;

    discount!: number;
  
    redemptionLimit?: boolean;
  
    vendor?: Vendor | string;
  
    client?: Customer;
  
    createdAt!: Date;
  
    updatedAt!: Date;
  }