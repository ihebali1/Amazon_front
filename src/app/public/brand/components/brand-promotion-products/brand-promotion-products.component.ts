import { Component, Input, OnInit } from '@angular/core';
import { DealProduct } from 'src/app/shared/models/deal-product';
import { DealService } from 'src/app/shared/services/deal.service';

@Component({
  selector: 'app-brand-promotion-products',
  templateUrl: './brand-promotion-products.component.html',
  styleUrls: ['./brand-promotion-products.component.scss']
})
export class BrandPromotionProductsComponent implements OnInit {
  deals: DealProduct[] = [];
  @Input() brand!: string;
  constructor(private dealService: DealService) { }

  getDeals() {
    this.dealService.getBrandActiveProducts(this.brand).subscribe(
      res => this.deals = res
    )
  }

  ngOnInit(): void {
    this.getDeals();
  }

}
