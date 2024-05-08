import { Customer } from "./customer";

export class Adress {
    id!: string;
  
    country!: string;
  
    streetAddress!: string;
  
    apt?: number;
  
    city!: string;
  
    state!: string;
  
    zipCode!: string;
  
    isDefault?: boolean;
  
    client?: Customer | string;
  
    createdAt!: Date;
  
    updatedAt!: Date;
}