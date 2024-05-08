import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/public/wish-list/services/wishlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-to-wish-list',
  templateUrl: './add-to-wish-list.component.html',
  styleUrls: ['./add-to-wish-list.component.scss']
})
export class AddToWishListComponent implements OnInit {
  wishLists : any = [] 
  wishForm: FormGroup = new FormGroup(
    {
          product: new FormControl(this.data.product.id),
          comment: new FormControl(''),
          wishList: new FormControl(''),
          needs: new FormControl(0),
          has: new FormControl(0),
          priority: new FormControl('')
      }
      );

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddToWishListComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, private wishListService: WishlistService) {
      console.log(this.data.product.id);
      
     }

  ngOnInit(): void {
    this.getWishLists();
   
    this.wishForm = this.fb.group({
      product: [this.data.product.id, Validators.required],
      comment: ['', Validators.required, Validators.minLength(5)],
      priority: ['', Validators.required],
      wishList: ['', Validators.required],
      needs: [0, Validators.required, Validators.min(0)],
      has: [0, Validators.required, Validators.min(1)], 
  },);
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.wishForm.controls;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getWishLists() {

    this.wishListService.getMyWishLists().subscribe(
      res => this.wishLists = res
    ) 
  }

  closeAndRedirect() {
    this.dialogRef.close();
    this.router.navigate(['/public/wish-list']);
  }

  addProductToWishList() {
    if(this.wishForm.errors) return;
    this.wishListService.addProductToWishList(this.wishForm.getRawValue()).subscribe(
      res => {
        Swal.fire({
          icon: 'success',
          title: 'Successfully added to wishList',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>this.dialogRef.close())
      }
    )

  }
}
