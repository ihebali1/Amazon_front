import { Attribute } from "./attribute";
import { VariationTheme } from "./variation-theme";
export class ChildCategory {
  id!: string;

  name!: string;

  arName!: string;

  variationThemes?: VariationTheme[];

  attributes?: Attribute[];

  createdAt!: Date;

  updatedAt!: Date;
}
