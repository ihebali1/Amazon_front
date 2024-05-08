import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatConversationComponent } from 'src/app/private/chat/pages/chat-conversation/chat-conversation.component';
import { StoreDetailsComponent } from './pages/store-details/store-details.component';

const routes: Routes = [{
  path: ':id',
  component: StoreDetailsComponent,
  children: [
    {
      path: ':chatId',
      component: ChatConversationComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
