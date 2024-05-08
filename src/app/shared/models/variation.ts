import { AttributeChoice } from "./attribute-choice";
import { AttributeValue } from "./attribute-value";
import { ParentListing } from "./parent-listing";
import { Product } from "./product";

export class Variation extends Product {

  variationAttributeChoices!: AttributeChoice[];


  variationAttributeValues!: AttributeValue[];


  parentListing!: ParentListing | string;
}
