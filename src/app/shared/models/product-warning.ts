import { ParentListing } from "./parent-listing";
import { SimpleProduct } from "./simple-product";

export class ProductWarning {
  id!: string;

  value!: ProductWarningEnum;

  simpleProduct?: SimpleProduct | string;

  parentListing?: ParentListing | string;

  createdAt!: Date;

  updatedAt!: Date;
}
export enum ProductWarningEnum {
    ChokingHazardContainsAMarble = 'ChokingHazardContainsAMarble',
    ChokingHazardIsASmallBall = 'ChokingHazardIsASmallBall',
    ChokingHazardIsAMarble = 'ChokingHazardIsAMarble',
    ChokingHazardContainsSmallBall = 'ChokingHazardContainsSmallBall',
    ChokingHazardBalloon = 'ChokingHazardBalloon',
    NoWarningApplicable = 'NoWarningApplicable',
    ContainsSmallMagnets = 'ContainsSmallMagnets',
  }
  