import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import { FileService } from "src/app/shared/services/file.service";
import { environment } from "src/environments/environment";
import { ReportService } from "../../services/report.service";

@Component({
  selector: "app-complaint-details",
  templateUrl: "./complaint-details.component.html",
  styleUrls: ["./complaint-details.component.scss"],
})
export class ComplaintDetailsComponent
  implements OnInit, AfterViewChecked, AfterViewInit
{
  reportId: any;
  server: string;
  connectedUserId: any;
  messages: any;
  @ViewChild("scrollMe") private myScrollContainer: any;
  video: any;
  image: any;
  horizontalPosition: MatSnackBarHorizontalPosition = "start";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";
  messageForm: FormGroup = new FormGroup({
    message: new FormControl(""),
  });
  report: any;
  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private fileService: FileService,
    private _snackBar: MatSnackBar,
  ) {
    this.reportId = this.route.snapshot.params["id"];
    this.server = environment.server;
    this.connectedUserId = JSON.parse(
      localStorage.getItem("user_data") as string
    )?.id;
  }
  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  ngOnInit(): void {
    this.getmessages();
    this.getReportInfo()
  }

  getReportInfo(){
    this.reportService.getReport(this.reportId).subscribe(
      res=> {
        this.report = res;
      }
    )
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  getmessages() {
    this.reportService
      .getReportMessages(this.reportId)
      .subscribe((res: any) => {
        this.messages = res;
      });
  }

  sendMessage() {
    if (this.image) {
      this.fileService.uploadFile(this.image).subscribe((image: any) => {
        if (this.video) {
          this.fileService.uploadFile(this.video).subscribe((video: any) => {
            this.submitMessage(image.id, video.id);
          });
        } else {
          this.submitMessage(image.id, null);
        }
      });
    } else {
      if (this.video) {
        this.fileService.uploadFile(this.video).subscribe((video: any) => {
          this.submitMessage(null, video.id);
        });
      } else {
        this.submitMessage(null, null);
      }
    }
  }

  submitMessage(imageId: any, videoId: any) {
    this.reportService
      .sendMessage(
        this.reportId,
        this.messageForm.getRawValue().message,
        imageId,
        videoId
      )
      .subscribe((res: any) => {
        this.getmessages();
        this.messageForm.reset();
        this.image = null;
        this.video = null;
      },err=> {
        this._snackBar.open(err.error.message, "", {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 2000,
        });
      });
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
