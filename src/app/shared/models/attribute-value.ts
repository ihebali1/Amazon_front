import { Attribute } from "./attribute";
export class AttributeValue {
  id!: string;

  value!: string;

  attribute!: Attribute | string;

  createdAt!: Date;

  updatedAt!: Date;
}
