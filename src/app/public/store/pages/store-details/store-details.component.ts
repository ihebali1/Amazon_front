import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ChatService } from 'src/app/private/chat/pages/chat.service';
import { StoreService } from '../../services/store.service';
import { SendMessageComponent } from '../send-message/send-message.component';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {
  storeId: any;
  store: any;
  storeProducts: any;
chat:any;
  customOptions: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],

    nav: false
  }
  storeHotProducts: any;

  constructor(private storeService: StoreService,private chatService:ChatService, private route:ActivatedRoute,public dialog: MatDialog) { 
    this.storeId = this.route.snapshot.params['id'];
    console.log(this.storeId)
  }
  

  ngOnInit(): void {
    this.getVendorDetails();
    this.getVendorProducts();
    this.getVendorHotProducts();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SendMessageComponent, {
      width: '650px',
      data: {storeId: this.storeId},

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }

  getVendorDetails() {
    this.storeService.getStoreInfo(this.storeId).subscribe(
      res => {
        this.store = res;
        console.log(this.store)
      }
    )
  }

  getVendorProducts() {
    this.storeService.getStoreProducts(this.storeId).subscribe(
      (res: any) => {
        this.storeProducts = res.products;
        console.log(this.storeProducts)
      }
    )
  }

  getVendorHotProducts() {
    this.storeService.getStoreHotNewProducts(this.storeId).subscribe(
      (res: any) => {
        this.storeHotProducts = res;
      }
    )
  }
  

}
