import { Component, OnInit, ViewChild } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import {
  StripeCardElementChangeEvent,
  StripeCardElementOptions,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import { NgxSpinnerService } from "ngx-spinner";
import { StripeCardComponent, StripeService } from "ngx-stripe";
import { AccountService } from "src/app/private/account-info/services/account.service";
import { CartService } from "src/app/shared/services/cart.service";
import { ShippingService } from "src/app/shared/services/shipping.service";
import { CheckoutService } from "../../services/checkout.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  @ViewChild(StripeCardComponent)
  card!: StripeCardComponent;
  shippingForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    streetAddress: new FormControl(""),
    aptNumber: new FormControl(""),
    city: new FormControl(""),
    postalCode: new FormControl(""),
    saveAddress: new FormControl(false),
  });

  shippingCosts: any;
  shippingTotalPrice = 0;
  selectedState: any;

  selectedAddress: any;

  address = new FormControl('');

  horizontalPosition: MatSnackBarHorizontalPosition = "start";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";
  showButton: boolean = false;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: "#666EE8",
        color: "#31325F",
        fontWeight: "300",
        padding: "5px",
        //fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: "24px",
        "::placeholder": {
          color: "#CFD7E0",
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: "ar",
  };

  stripeTest!: FormGroup;
  cartItems: any;
  subTotal = 0;
  states: any;
  userData: any;
  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private checkoutService: CheckoutService,
    private _snackBar: MatSnackBar,
    private spinner: NgxSpinnerService,
    private router: Router,
    private shippingService: ShippingService,
    private accountService: AccountService
  ) { }



  getClinetInfo() {
    this.accountService.getClientInfo().subscribe(
      (res: any) => {
        this.userData = res;
      }
    )
  }

  ngOnInit(): void {
    this.getStates();
    this.getClinetInfo();
    this.shippingForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      streetAddress: ["", Validators.required],
      aptNumber: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      postalCode: ["", Validators.required],
      saveAddress: [false]
    });
    this.getCartItems();
    this.stripeTest = this.fb.group({
      name: ["", [Validators.required]],
    });
  }

  getShippingCost() {
    this.shippingService
      .getShippingCost(this.selectedState)
      .subscribe((res) => {
        console.log(res);
        this.shippingCosts = res;
        this.shippingTotalPrice = 0;
        for (let shippingCost of this.shippingCosts) {
          this.shippingTotalPrice += shippingCost.cost;
        }
      });
  }

  getStates() {
    this.shippingService.getStates().subscribe((res) => {
      this.states = res;
      this.selectedState = this.states[0]?.id;
      this.shippingForm.controls["state"].setValue(this.states[0]?.id);
      this.getShippingCost();
    });
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe((res: any) => {
      this.cartItems = res?.cartItems;
      this.cartItems.forEach((item: any) => {
        this.subTotal += item.quantity * item.product.price;
      });
    });
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.shippingForm.controls;
  }

  createToken(): void {
    if (this.shippingForm.invalid && this.address.value == '') {
      return;
    }
    const name = this.stripeTest?.get("name")?.value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);

          let shippingAddress = null;
          if (this.address.value == '') shippingAddress = this.shippingForm.getRawValue()
          else {
            delete this.selectedAddress.id;
            delete this.selectedAddress.isDefault;
            delete this.selectedAddress.updatedAt;
            delete this.selectedAddress.createdAt;
            shippingAddress = this.selectedAddress;
            shippingAddress.state = this.selectedAddress.state.id
          }

          this.checkoutService
            .createCharge(shippingAddress, result.token.id)
            .subscribe(
              (res) => {

                this.openSnackBar("تم الدفع بنجاح");
                this.router.navigate(["private/account/invoices"]);

                this.cartService.loadAll();
              },
              (err) => {

                this.openSnackBar(err?.error?.message).then(() => {
                  this.router.navigate(["private/cart"]);
                });
              }
            );
        } else if (result.error) {
          // Error creating the token
          this.openSnackBar(result.error.message as string);

        }
      });
  }

  async openSnackBar(message: string) {
    return this._snackBar.open(message, "", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
    });
  }

  onChange(ev: StripeCardElementChangeEvent) {
    const displayError = document.getElementById("card-errors");
    if (ev.error) {
      this.showButton = false;
      console.log(ev.error.message);
    } else {
      this.showButton = true;
    }
  }

}
