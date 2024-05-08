import { DealProduct } from "./deal-product";
import { PromotinalOffer } from "./promotional-offer";

export class Deals extends PromotinalOffer {
  dealType!: DealsTypeEnum;

  dealProducts!: DealProduct[] | string[];
}
export enum DealsTypeEnum {
  WEEKDEAL = "WEEKDEAL",
  LIGHTDEAL = "LIGHTDEAL",
}
