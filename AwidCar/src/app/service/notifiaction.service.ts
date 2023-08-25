import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifiactionService {
  private apiUrl = 'http://localhost:8090/v1/notificationGroup';
  private apiUrlDetails = 'http://localhost:8090/v1/notification';

  constructor(private http: HttpClient) { }
  
  getAllNotification() {
    return this.http.get(`${this.apiUrl}/getAll`);
  }

  getNotificationByNotificationGroupId(id: number): Observable<Notification> {
    return this.http.get<Notification>(`${this.apiUrlDetails}/getByNotificationGroupId/` + id);
  }
}
