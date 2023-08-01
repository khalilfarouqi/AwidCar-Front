import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:8090/v1/order';

  constructor(private http: HttpClient) { }

  getAllOrder(): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/getAll`);
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/` + id);
  }

  deleteOrder(id: number){
    return this.http.delete<Order>(`${this.apiUrl}/` + id);
  }
}
