import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'http://localhost:8090/v1/car';

  constructor(private http: HttpClient) { }

  getAllCar(): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/getAll`);
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/` + id);
  }

  deleteCar(id: number){
    return this.http.delete<Car>(`${this.apiUrl}/` + id);
  }

  addCar(car :Car){
    return this.http.post(`${this.apiUrl}`,car);
  }

  postData(data: Car): Observable<Car> {
    // Send POST request to the server
    return this.http.post<Car>(this.apiUrl, data);
  }

}
