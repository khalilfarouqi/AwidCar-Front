import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:8090/v1/order';

  constructor(private http: HttpClient) { }
  
  getAllOrder() {
    return this.http.get(`${this.apiUrl}/getAll`);
  }
}
