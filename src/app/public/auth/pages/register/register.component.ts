import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
  FormControl,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    password: new FormControl(""),
  });
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }
  ngOnInit() {}

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  registerUser() {
    if (this.signupForm.invalid) {
      Swal.fire("يرجى التحقق من المعطيات", "", "error");
      return;
    }
    this.authService.signUp(this.signupForm.value).subscribe(
      (res) => {
        if (res) {
          this.signupForm.reset();
          Swal.fire({
            icon: "success",
            title: "تم إنشاء الحساب بنجاح",
            timer: 1500,
          }).then(() => this.router.navigate(["public/auth/login"]));
        }
      },
      (err) => {
        console.log(err)
        if (typeof err.error.message == typeof "x")
          Swal.fire(err.error.message, "", "error");
        else Swal.fire("يرجى التحقق من المعطيات", "", "error");
      }
    );
  }
}
