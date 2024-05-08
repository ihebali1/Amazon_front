import { Attribute } from "./attribute";
export class AttributeChoice {
  id!: string;

  value!: string;

  order?: number;

  type!: ChoiceTypeEnum;

  attribute?: Attribute | string;

  createdAt!: Date;

  updatedAt!: Date;
}

export enum ChoiceTypeEnum {
  COLOR = "COLOR",
  TEXT = "TEXT",
}
