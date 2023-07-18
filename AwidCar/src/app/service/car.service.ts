import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'http://localhost:8090/v1/car';

  constructor(private http: HttpClient) { }
  
  getAllCar() {
    return this.http.get(`${this.apiUrl}/getAll`);
  }

  addCar(car :any){
    return this.http.post('${this.apiUrl}',car);
  }
}
