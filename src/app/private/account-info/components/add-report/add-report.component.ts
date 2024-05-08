import { Component, Inject, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FileService } from "src/app/shared/services/file.service";
import Swal from "sweetalert2";
import { ReportService } from "../../services/report.service";

@Component({
  selector: "app-add-report",
  templateUrl: "./add-report.component.html",
  styleUrls: ["./add-report.component.scss"],
})
export class AddReportComponent implements OnInit {
  reportForm: FormGroup = new FormGroup({
    message: new FormControl(""),
    order: new FormControl(""),
  });
  image: any;
  video: any;

  constructor(
    private reportService: ReportService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fileService: FileService,
    private _snackBar: MatSnackBar
  ) {
    console.log(data);
  }

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      message: ["", Validators.required],
      order: this.data?.order?.id,
    });
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.reportForm.controls;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addReport() {
    if (this.image) {
      this.fileService.uploadFile(this.image).subscribe((image: any) => {
        if (this.video) {
          this.fileService.uploadFile(this.video).subscribe((video: any) => {
            this.submitReport(image.id, video.id);
          });
        } else {
          this.submitReport(image.id, null);
        }
      });
    } else {
      if (this.video) {
        this.fileService.uploadFile(this.video).subscribe((video: any) => {
          this.submitReport(null, video.id);
        });
      } else {
        this.submitReport(null, null);
      }
    }
  }

  submitReport(imageId: any, videoId: any) {
    this.reportService
      .CreateReport(this.reportForm.getRawValue(), imageId, videoId)
      .subscribe(
        (res: any) => {
          Swal.fire("تمت إضافة الشكوى بنجاح", "", "success");
        },
        (err: any) => {
          Swal.fire(err.error.message, "", "error");
        }
      );
  }

  onImageInput(event: Event) {
    let reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        this.image = reader.result;
        //console.log(this.image);
      }
    };
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    reader.readAsDataURL(file);
  }

  onVideoInput(event: Event) {
    let reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        this.video = reader.result;
        //console.log(this.image);
      }
    };
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    reader.readAsDataURL(file);
  }
}
