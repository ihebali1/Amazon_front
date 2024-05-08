import { Customer } from "./customer";
import { Vendor } from "./vendor";

export class Order {
  id!: string;

  orderId!: string;

  totalPrice!: number;

  platformGainPercentage!: number;

  status!: OrderStatusEnum;

  shippingAmount!: number;

  assignedTransporter: any | string;

  client?: Customer | string;

  vendor?: Vendor | string;

  orderItems?: any[] | string[];

  paymentInfo: any | string;

  shippingInfo: any | string;

  report: any;

  orderedAt?: Date;

  deliveredAt?: Date;

  canceledAt?: Date;

  deliveryStartedAt?: Date;

  createdAt!: Date;

  updatedAt!: Date;
}

export enum OrderStatusEnum {
  PENDING = "PENDING",

  ORDERED = "ORDERED",

  INDELIVERY = "INDELIVERY",

  DELIVERED = "DELIVERED",

  CANCELED = "CANCELED",
}
