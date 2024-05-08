import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PaymentMethodService } from '../../services/payment-method.service';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {
  paymentMethods: any;
  default!: string;

  constructor(private paymentMethodService: PaymentMethodService,
    private spinner: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.getPaymentMethods()
  }

  getPaymentMethods() {
    this.spinner.show();
    this.paymentMethodService.getPaymentMethods().subscribe(
      (res: any)=> {
        this.paymentMethods = res?.paymentMethods;
        this.default = res?.default;
        console.log(this.paymentMethods)
        this.spinner.hide();
      },err=>{
        this.spinner.hide()
      }
    )
  }

}
