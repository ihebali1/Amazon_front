import { Product } from "./product";
import { File } from "./file";
import { AttributeChoice } from "./attribute-choice";
import { AttributeValue } from "./attribute-value";
import { ChildCategory } from "./child-category";
import { ProductFeature } from "./product-feature";
import { ProductKeyWord } from "./product-key-word";
import { ProductWarning } from "./product-warning";
import { ProductReview } from "./product-review";

export class SimpleProduct extends Product {
  primaryImage!: File;

  images!: File[];

  features?: ProductFeature[] | string[];

  keyWords?: ProductKeyWord[] | string[];

  warnings?: ProductWarning[] | string[];

  arName!: string;

  rating!: number;

  name!: string;

  description!: string;

  searchTerms!: string;

  legalDisclaimer!: string;

  brand!: string;

  manufacturer!: string;

  manufactureSerial!: string;

  status!: ProductStatusEnum;

  type!: ProductTypeEnum;

  isActive!: boolean;

  childCategory?: ChildCategory;

  reviews?: ProductReview[] | string[];

  attributeChoices?: AttributeChoice[];

  attributeValues?: AttributeValue[];

  rejectReason!: string;

  createdAt!: Date;

  updatedAt!: Date;
}

export enum ProductTypeEnum {
  SIMPLE_LISTING = "SIMPLE_LISTING",
  PARENT_LISTING = "PARENT_LISTING",
}

export enum ProductStatusEnum {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}
