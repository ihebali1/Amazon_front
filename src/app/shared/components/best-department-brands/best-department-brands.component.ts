import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { Brand } from "../../models/brand";
import { BrandService } from "../../services/brand.service";

@Component({
  selector: "app-best-department-brands",
  templateUrl: "./best-department-brands.component.html",
  styleUrls: ["./best-department-brands.component.scss"],
})
export class BestDepartmentBrandsComponent implements OnInit {
  brands!: Brand[];
  server: string;
  constructor(private brandService: BrandService) {
    this.server = environment.server;
  }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands() {
    this.brandService.getBrands().subscribe((res) => (this.brands = res));
  }
}
