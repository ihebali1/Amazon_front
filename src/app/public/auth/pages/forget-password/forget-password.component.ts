import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  form = this.fb.group({
    email: [null, Validators.required]
  });
  constructor(private authService:AuthService,private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  forgotPassword(){
    this.authService.forgotPassword(this.form.getRawValue())
    .subscribe
    (
      res=> {
     this.router.navigate(['/auth/login'])})}

}
