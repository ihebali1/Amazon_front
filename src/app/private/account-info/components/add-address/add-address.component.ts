import { Component, Inject, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ShippingService } from "src/app/shared/services/shipping.service";
import { AccountService } from "../../services/account.service";
import { AddReportComponent } from "../add-report/add-report.component";

@Component({
  selector: "app-add-address",
  templateUrl: "./add-address.component.html",
  styleUrls: ["./add-address.component.scss"],
})
export class AddAddressComponent implements OnInit {
  shippingForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    streetAddress: new FormControl(""),
    aptNumber: new FormControl(""),
    city: new FormControl(""),
    postalCode: new FormControl(""),
    state: new FormControl(""),
  });
  states: any;
  selectedState: any;

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddReportComponent>,
    private shippingService: ShippingService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }

  ngOnInit(): void {
    this.shippingForm = this.fb.group({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      streetAddress: ["", Validators.required],
      aptNumber: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      postalCode: ["", Validators.required],
    });
    this.getStates();
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.shippingForm.controls;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addAddress() {
    this.accountService
      .addAddressToClient(this.shippingForm.getRawValue())
      .subscribe((res) => {
        this.shippingForm.reset()
        this.onNoClick();
      });
  }

  getStates() {
    this.shippingService.getStates().subscribe((res) => {
      this.states = res;
      this.selectedState = this.states[0]?.id;
      this.shippingForm.controls["state"].setValue(this.states[0]?.id);
    });
  }
}
