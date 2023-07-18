import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8090/v1/client';

  constructor(private http: HttpClient) { }
  
  getAllClient() {
    return this.http.get(`${this.apiUrl}/getAll`);
  }
}
