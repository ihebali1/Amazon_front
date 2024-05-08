import { Vendor } from "./vendor";

export class Product {
  id?: string;

  quantity!: number;

  price!: number;

  vendor!: Vendor | string;

  condition!: ProductConditionEnum;

  productId!: string;

  productIdType!: ProductIdTypeEnum;
}

export enum ProductIdTypeEnum {
  GTIN = "GTIN",
  EAN = "EAN",
  GCID = "GCID",
  ISBN = "ISBN",
  UPC = "UPC",
  ASIN = "ASIN",
}

export enum ProductConditionEnum {
  USED_GOOD = "USED_GOOD",
  USER_LIKE_NEW = "USER_LIKE_NEW",
  NEW = "NEW",
  USED_VER_GOOD = "USED_VER_GOOD",
  USED_ACCEPTABLE = "USED_ACCEPTABLE",
}