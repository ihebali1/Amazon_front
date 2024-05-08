import { ChildCategory } from "./child-category";
import { ParentListing } from "./parent-listing";
import { Attribute } from "./attribute";
export class VariationTheme {
    id!: string;
  
    name!: string;
  
    childCategories?: ChildCategory[];
  
    parentListings?: ParentListing[] | string[];
  
    attributes?: Attribute[];
  
    createdAt!: Date;
  
    updatedAt!: Date;
}
