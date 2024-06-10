import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KataService {
  private apiUrl = 'http://localhost:8080/api/transform';

  constructor(private http: HttpClient) { }

  transformNumber(number: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/${number}`);
  }
}
