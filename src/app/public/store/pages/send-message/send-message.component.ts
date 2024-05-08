import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatConversationComponent } from 'src/app/private/chat/pages/chat-conversation/chat-conversation.component';
import { ChatService } from 'src/app/private/chat/pages/chat.service';
import { ChatComponent } from 'src/app/private/chat/pages/chat/chat.component';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  storeId: any;
  id:any;
  message:any;
  chatt:any;
  connectedUser:any;
  form = new FormGroup({
    content:new FormControl(),
    receiverId: new FormControl(),
  });
  constructor(private route: ActivatedRoute,
    private chatService: ChatService,
     private router: Router,
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<ChatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.route.queryParams
      .subscribe(params => {     
      }
    );
   this.connectedUser =JSON.parse(localStorage.getItem('user_data') as string)?.id;
  
}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  createMessage() {
    console.log(this.data)
    this.chatService.create({
      content: this.form.getRawValue().content,
      receiverId: this.data.storeId,
    
   }).subscribe(
    res=> {
      this.chatt= res;
      this.router.navigate([`/private/chat/${this.data.storeId}}`])
      this.dialogRef.close()
    }
   )  
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
    
}
