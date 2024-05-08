import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  activeLink : string;
  constructor(private router: Router, ) {
    this.activeLink = this.router.url;
    console.log(this.activeLink);
   }
  ngOnInit(): void {
  }

  

  setUserInfoActive() {
    this.activeLink = '/private/account'
  }

  setInvoicesActive() {
    this.activeLink = '/private/account/invoices'
    console.log(this.activeLink)
  }

  setNotificationsActive() {
    this.activeLink = 'private/account/notification'
  }

  setAddressActive() {
    this.activeLink = 'private/account/address'
  }

  setPaymentMethodsActive() {
    this.activeLink = 'private/account/payment-methods'

  }

}
