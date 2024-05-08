import { Order } from "./order";
import { Product } from "./product";
import { ProductReview } from "./product-review";
import { User } from "./user";

export class Notification {

    id!: string;


    title!: string;


    arTitle!: string;


    content!: string;

    arContent!: string;

    order?: Order | string;

    type!: NotificationTypeEnum;

    product!: Product | string;

    report?: any | string;

    productReview?: ProductReview | string;

    user?: User | string;

    chat?: any | string;
  
    createdAt!: Date;
  
    updatedAt!: Date;
}

export enum NotificationTypeEnum {
    ORDER = 'ORDER',
    DELIVERY = 'DELIVERY',
    PRODUCT = 'PRODUCT',
    REPORT = 'REPORT',
    REVIEW = 'REVIEW',
    USER = 'USER',
    PAYOUT = 'PAYOUT',
    CHAT = 'CHAT',
}
