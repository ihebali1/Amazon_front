import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  id:any;
  chatt:any;
  message:any;
  connectedUser:any;
  form = new FormGroup({
      content:new FormControl(),
      receiverId: new FormControl(),
    });
  constructor(private chatService:ChatService,
    private route:ActivatedRoute, private router: Router) { 
     this.id = this.route.snapshot.params['chatId'];
     console.log(this.id)
     this.router.events.subscribe((val) => {
      this.id = this.route.snapshot.params['chatId'];
      console.log(this.id)
     } )
    
  }

  ngOnInit(){
    this.chatService.getVendorContacts().subscribe(
      res => {
        this.chatt= res;
        if(this.chatt.length >0)
        this.router.navigate([`/private/chat/${this.chatt[0].userReceiver.id}`])
      }
    )
  }
  
  
}
