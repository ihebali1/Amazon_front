import { AttributeChoice } from "./attribute-choice";
import { AttributeValue } from "./attribute-value";
import { ChildCategory } from "./child-category";
import { VariationTheme } from "./variation-theme";

export class Attribute {
  id!: string;

  key!: string;

  arKey!: string;

  type!: AttributeTypeEnum;

  isOrdered!: boolean;

  childCategories?: ChildCategory[];

  variationThemes?: VariationTheme[];

  attributeChoices?: AttributeChoice[];

  attributeValues?: AttributeValue[] | string[];

  createdAt!: Date;

  updatedAt!: Date;
}

export enum AttributeTypeEnum {
  SINGLE_CHOICE = "SINGLE_CHOICE",
  MULTIPLE_CHOICES = "MULTIPLE_CHOICES",
}
