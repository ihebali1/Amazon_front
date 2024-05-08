import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-department-categories-grid',
  templateUrl: './department-categories-grid.component.html',
  styleUrls: ['./department-categories-grid.component.scss']
})
export class DepartmentCategoriesGridComponent implements OnInit {
  @Input() parentCategories: any;
  server: string;
  constructor(private router: Router) {
    this.server = environment.server;
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
   }

  ngOnInit(): void {
  }

}
