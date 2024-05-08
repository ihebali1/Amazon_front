import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-create-wish-list',
  templateUrl: './create-wish-list.component.html',
  styleUrls: ['./create-wish-list.component.scss']
})
export class CreateWishListComponent implements OnInit {

  wishForm: FormGroup = new FormGroup(
    {
          title: new FormControl(''),
      }
      );

  constructor( private fb: FormBuilder, public dialogRef: MatDialogRef<CreateWishListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private wishListService: WishlistService) {
      console.log(data);
     }

  ngOnInit(): void {
    this.wishForm = this.fb.group({
      title: ['', Validators.required],
  },);
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.wishForm.controls;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createWishList() {
    if(this.wishForm.errors) return;
    this.wishListService.createWishList(this.wishForm.getRawValue()).subscribe(
      res => {
        Swal.fire({
          icon: 'success',
          title: 'Successfully created wish list',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>this.dialogRef.close())
      }
    )
  }


}
