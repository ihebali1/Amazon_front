import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileService } from 'src/app/shared/services/file.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss']
})
export class ViewReportComponent implements OnInit {

  
  server: string;
  connectedUserId: string;
  image: any;
  video: any;
  messageForm: FormGroup = new FormGroup(
    {
          message: new FormControl(''),
    }
      );
  messages: any;
  constructor(    public dialogRef: MatDialogRef<ViewReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private reportService: ReportService,
    private fileService: FileService) {
      this.server = environment.server;
      this.connectedUserId = JSON.parse(localStorage.getItem('user_data') as string)?.id
      console.log(this.connectedUserId)
    
     }

     @ViewChild('scrollMe') private myScrollContainer: any;

    
 
     ngAfterViewChecked() {        
         this.scrollToBottom();        
     } 
 
     scrollToBottom(): void {
         try {
             this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
         } catch(err) { }                 
     }

  ngOnInit(): void {
    console.log(this.data);
    this.getmessages();
  }

  getmessages() {
    this.reportService.getReportMessages(this.data.report.id).subscribe(
      (res: any) => {
        this.messages = res;
        this.scrollToBottom();
        console.log(this.messages)
      }
    )
  }

  sendMessage() {
    if(this.image) {
      this.fileService.uploadFile(this.image).subscribe(
        (image: any) => {
          if(this.video) {
            this.fileService.uploadFile(this.video).subscribe(
              (video: any) => {
                this.submitMessage(image.id, video.id);
              }
            )
          } else {
            
                this.submitMessage(image.id, null);
             
          }
        }
      )
    } else {
          if(this.video) {
            this.fileService.uploadFile(this.video).subscribe(
              (video: any) => {
                this.submitMessage(null, video.id);
              }
            )
          } else {
            this.submitMessage(null, null);
          }
    }
    
  }

  submitMessage(imageId: any, videoId: any) {
    this.reportService.sendMessage(this.data.report.id, this.messageForm.getRawValue().message, imageId, videoId).subscribe(
      (res: any) => {
      
        this.getmessages();
        this.messageForm.reset();
        this.image=null;
        this.video=null;
      },
      
    )
  }
  
  onImageInput(event: Event) {
    let reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        this.image = reader.result;
        //console.log(this.image);
      }
    };
    const target= event.target as HTMLInputElement;
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
  const target= event.target as HTMLInputElement;
  const file: File = (target.files as FileList)[0];
  reader.readAsDataURL(file);
}

}
