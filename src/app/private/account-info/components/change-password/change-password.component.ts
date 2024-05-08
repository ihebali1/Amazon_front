import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ChangePasswordService } from '../../services/change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  firstFormGroup: FormGroup = new FormGroup(
    {
          oldPassword: new FormControl(''),
          newPassword: new FormControl(''),
      }
      );
connectedUser: any;
  constructor(private changePasswordService: ChangePasswordService, private route:ActivatedRoute,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {     
    }
  );
  this.connectedUser =JSON.parse(localStorage.getItem('user_data') as string)?.id;
  console.log(this.connectedUser)
    this.firstFormGroup = this._formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }
  changePassword(){
    this.changePasswordService.changePassword(this.firstFormGroup.getRawValue())
    .subscribe(
      res => {
        this.changePasswordService.logout()
      },
      err => console.log(err)
    )
   }
}
