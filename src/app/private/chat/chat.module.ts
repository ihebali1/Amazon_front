import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ChatConversationComponent } from './pages/chat-conversation/chat-conversation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    ChatComponent,
    ChatConversationComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
  ,
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ChatModule { }
