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

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/` + 1);
  }

  existsPassWord(id: number, currentPassword: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/existPassword/` + id + `/` + currentPassword);
  }

  postData(data: User): Observable<User> {
    return this.http.put<User>(this.apiUrl, data);
  }
}
