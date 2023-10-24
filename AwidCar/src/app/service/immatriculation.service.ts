import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Immatriculation } from '../models/Immatriculation';
import { Observable } from 'rxjs';
import { Series } from '../enums/Series.enum';


@Injectable({
  providedIn: 'root'
})
export class ImmatriculationService {

  private apiUrl = 'http://localhost:8090/v1/immatriculation';

  constructor(private http: HttpClient) { }

  postData(data: Immatriculation): Observable<Immatriculation> {
    return this.http.post<Immatriculation>(this.apiUrl, data);
  }

  getLastCarId(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/lastId`);
  }

  convertArabicToLatin(arabicChar: string): string {
    switch (arabicChar) {
      case Series.A:
        return 'A';
      case Series.B:
        return 'B';
      case Series.T:
        return 'T';
      case Series.D:
        return 'D';
      case Series.E:
        return 'E';
      case Series.F:
        return 'F';
      case Series.H:
        return 'H';
      case Series.WWW:
        return 'www';
      default:
        return arabicChar;
    }
  }
}
