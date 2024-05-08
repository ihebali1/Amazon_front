import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  userData: any;

  infoForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,private authService: AuthService,
    private accountService: AccountService,
    public fb: FormBuilder,) {
      this.infoForm = this.fb.group({
        firstName: [''],
        lastName: [''],
        phone: [''],
        email: [''],
        dateBirth: [''],
        gender: [''],
      });
   }
  getClinetInfo(){
    this.accountService.getClientInfo().subscribe(
      res =>{
        this.userData = res;
        this.infoForm = this.fb.group({
          firstName: [this.userData.firstName || ''],
          lastName: [this.userData.lastName || ''],
          phone: [this.userData.phone || ''],
          email: [this.userData.email || ''],
          dateBirth: [this.userData.dateBirth || ''],
          gender: [this.userData.gender || ''],
        });
        console.log(this.userData)
      }
    )
  }

  ngOnInit(): void {
    this.getClinetInfo();
  }

  updateUserInfo() {
    this.accountService.updateClientInfo(this.infoForm.getRawValue()).subscribe(
      res=>{
        Swal.fire('تم تحديث الملف الشخصي بنجاح', '','success')
      }
    )
  }

  logout(){
    this.authService.doLogout();
  }

}
