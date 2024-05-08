import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateWishListComponent } from '../../components/create-wish-list/create-wish-list.component';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishLists: any;

  constructor(public dialog: MatDialog, private wishListService: WishlistService) { }

  ngOnInit(): void {
    this.getWishLists();
  }

  openDialog() {
    const dialogRef =  this.dialog.open(CreateWishListComponent, {
      width: "50%"
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getWishLists();
    });
  }

  getWishLists() {
    this.wishListService.getMyWishLists().subscribe(
      res => {
        this.wishLists = res;
      }
    )
  }

  

}
