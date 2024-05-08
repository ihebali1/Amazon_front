import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  signinForm: FormGroup;
  constructor(public fb: FormBuilder,
    public authService: AuthService,
    public router: Router) {
    this.signinForm = this.fb.group({
      email: [''],
      password: [''],
    });
   }

  ngOnInit(): void {
  }

  loginUser() {
    this.authService.signIn(this.signinForm.value)
  }

}
