import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8090/v1/user';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/getAll`);
  }
}
