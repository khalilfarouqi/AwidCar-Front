import { Component, OnInit } from '@angular/core';
import { NotifiactionService } from '../service/notifiaction.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.scss']
})
export class NotificationDetailComponent implements OnInit{

  constructor(private notifiactionService: NotifiactionService, private route: ActivatedRoute) {}

  notifications: any = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getByNotificationGroupId(params["id"]);
     })
  }

  public getByNotificationGroupId(id :number){
    this.notifiactionService.getNotificationByNotificationGroupId(id).subscribe((result) => { 
      this.notifications = result; 
      console.log(result)
    })
  }

}
