import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "src/app/shared/services/category.service";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.scss"],
})
export class DepartmentComponent implements OnInit {

 

  departmentId: string | null;
  department: any;
  banners: any = [];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.departmentId = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.getDepartment();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
   
  }

  getDepartment() {
    if (this.departmentId)
      this.categoryService
        .getDepartment(this.departmentId)
        .subscribe((res) => {
          this.department = res
          for(let banner  of this.department.banners) {
            if(banner.type == 'DEPARTMENT_HEADER') this.banners.push(banner)
          }
        });
  }
}
