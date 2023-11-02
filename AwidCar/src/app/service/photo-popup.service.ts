import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/Photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoPopupService {

  private apiUrl = 'http://localhost:8090/v1/photo';

  constructor(private http: HttpClient) { }

  postData(data: Photo): Observable<Photo> {
    return this.http.post<Photo>(this.apiUrl, data);
  }

  getLastPhotoId(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/lastId`);
  }
}
