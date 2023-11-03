import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from '../models/Search';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private apiUrl = 'http://localhost:8090/v1/search';

  constructor(private http: HttpClient) { }
  
  getSearch(label: string): Observable<Search> {
    if (label == '') label = '°';
    return this.http.get<Search>(`${this.apiUrl}/` + label);
  }
}
