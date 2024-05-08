import { Country } from "./country";
import { ParentListing } from "./parent-listing";
import { SimpleProduct } from "./simple-product";
import { User } from "./user";

export class Vendor extends User {
    
    businessCountry!: Country | string;
    
    businessType!: BusinessType;
    
    businessAdress: any;
    
    verificationLanguage: any;
    
    personalCountry!: string;
    
    businessJurisdiction!: Country | string;
    
    businessInfo: any;

    personnalInfo: any;
}

export enum BusinessType {
    CHARITY = 'CHARITY',
    STATE = 'STATE',
    PRIVATE = 'PRIVATE',
    INDIVIDUAL = 'INDIVIDUAL',
    PUBLIC = 'PUBLIC',
  }
  
