import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { OrderService } from '../../services/order.service';
import { AddReportComponent } from '../add-report/add-report.component';
import { ViewReportComponent } from '../view-report/view-report.component';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {
  orderId!: string;
  order: any;
  server: string;

  constructor(private orderService: OrderService, private route: ActivatedRoute, public dialog: MatDialog) {
    this.orderId = this.route.snapshot.params['id'];
    this.server = environment.server;
   }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.orderService.getOrder(this.orderId).subscribe(
      res => this.order = res
    )
  }

  openDialog(): void {
    console.log(this.order)
    const dialogRef = this.dialog.open(AddReportComponent, {
      width: '800px',
      
      data: {order: this.order},
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getOrder();
    });
  }

  openReportDialog(): void {
    console.log(this.order)
    const dialogRef = this.dialog.open(ViewReportComponent, {
      width: '950px',
      height: '600px',

      data: {report: this.order.report},
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getOrder();
    });
  }

}
