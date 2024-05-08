import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  drawerOpen = new BehaviorSubject<boolean>(false);
  drawerOpen$ = this.drawerOpen.asObservable();

  constructor(private http: HttpClient) { }
  create(message: any) {
    console.log(message)
    return this.http.post(`${environment.apiUrl}chat`,{content: message.content, receiverId: message.receiverId})
  }
  getVendorContacts() {
    return this.http.get(`${environment.apiUrl}chat/customer`)
  }
 getVendorsChatMessages(userId: string) {
    return this.http.get(`${environment.apiUrl}chat/vendor?userId=${userId}`)
   }
}
