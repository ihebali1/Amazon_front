import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-department-box',
  templateUrl: './department-box.component.html',
  styleUrls: ['./department-box.component.scss']
})
export class DepartmentBoxComponent implements OnInit {
  @Input() department: any;
  server: string;
  constructor() {
    this.server = environment.server;
   }

  ngOnInit(): void {
  }

}
