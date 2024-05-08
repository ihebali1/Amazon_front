import { Component, Input, OnInit } from '@angular/core';
import { Brand } from 'src/app/shared/models/brand';
import { BrandService } from 'src/app/shared/services/brand.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-most-selling-brands-department',
  templateUrl: './most-selling-brands-department.component.html',
  styleUrls: ['./most-selling-brands-department.component.scss']
})
export class MostSellingBrandsDepartmentComponent implements OnInit {

  brands!: Brand[];
  server: string;
  @Input() department: any
  constructor(private brandService: BrandService) {
    this.server = environment.server;
  }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands() {
    this.brandService.getBrands({
      department: this.department?.id
    }).subscribe((res) => (this.brands = res));
  }

}
