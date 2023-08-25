import { Component, OnInit } from '@angular/core';
import { NotifiactionService } from '../service/notifiaction.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{
  
  constructor(private notifiactionService: NotifiactionService) { }

  notifications: any = [];

  ngOnInit(): void {
    this.getNotification();
  }

  public getNotification(){
    this.notifiactionService.getAllNotification().subscribe((result) => {
      this.notifications = result;
      console.log(result)
    })
  }

}
