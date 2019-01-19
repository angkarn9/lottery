import { Result } from './../model/result';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  getByPeriod(period: string): Observable<Result[]> {
    return this.http.get<Result[]>(`http://www.mocky.io/v2/5c42b187320000e0297327ed?period=${period}`);
  }
}
