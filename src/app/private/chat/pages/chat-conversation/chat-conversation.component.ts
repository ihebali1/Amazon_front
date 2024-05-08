import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.scss']
})
export class ChatConversationComponent implements OnInit {
connectedUser:string;
id:any;
message:any;
chatt:any;
formChat = new FormGroup({
  content:new FormControl(),
  receiverId: new FormControl(),
});
  constructor(private route: ActivatedRoute,
    private chatService: ChatService,
    private router: Router,
    private cd: ChangeDetectorRef) {
      this.route.queryParams
        .subscribe(params => {     
        }
      );
      this.connectedUser =JSON.parse(localStorage.getItem('user_data') as string)?.id;
     }

     ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('chatId');
      this.chatService.getVendorsChatMessages(this.id).subscribe(
        res => {
          this.message= res;
        
      console.log(this.message)
        }
      )
    }
    createMessage() {
      this.chatService.create({
        ...this.formChat.getRawValue(),
        receiverId:this.id,
      
     }).subscribe(
      res=> {
        this.id = this.route.snapshot.paramMap.get('chatId');
        this.chatService.getVendorsChatMessages(this.id).subscribe(
          res => {
            this.message= res;
            this.formChat.reset()
          }
        )
      }
     )  
      }
}
