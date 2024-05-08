import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/shared/models/brand';
import { BrandService } from 'src/app/shared/services/brand.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  brand: string;
  brandInfo!: Brand;
  server: string;

  constructor(private route: ActivatedRoute, private brandService: BrandService) {
    this.brand = this.route.snapshot.paramMap.get("id") as string;
    this.server = environment.server;
  }

  getBrandInfo() {
    this.brandService.getBrand(this.brand).subscribe(
      res => {
        this.brandInfo = res
      }
    )
  }


  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    
    this.getBrandInfo()
  }

}
