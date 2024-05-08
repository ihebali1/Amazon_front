import { Component, OnInit } from '@angular/core';
import { UserNotification } from 'src/app/shared/models/user-notification';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }
  notifications: UserNotification[] = [];

  ngOnInit(): void {
    this.getNotifications()
  }

  getNotifications() {
    this.notificationService.getNotifications(50).subscribe(
      res => {
        this.notifications = res;
      }
    )
    
  }

}
