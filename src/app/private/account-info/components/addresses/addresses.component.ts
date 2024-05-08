import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from '../../services/account.service';
import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  userData: any;

  constructor(private accountService: AccountService, public dialog: MatDialog) { }

  getClinetInfo(){
    this.accountService.getClientInfo().subscribe(
      res =>{
        this.userData = res;
      }
    )
  }

  ngOnInit(): void {
    this.getClinetInfo();
  }

  removeAddress(addressId: string){
    this.accountService.removeAddressFromClient(addressId).subscribe(
      res=>this.ngOnInit()
    )
  }

  openAddAddressDialog(): void {
    const dialogRef = this.dialog.open(AddAddressComponent, {
      width: '700px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }
}