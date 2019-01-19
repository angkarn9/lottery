import { Result } from './../model/result';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() { }

  getByPeriod(period: string): Observable<Result[]> {
    return of(this.mockResult());
  }

  mockResult(): Result[] {
    let r1 = new Result();
    r1.id = "1";
    r1.value = "197079"
    r1.description = "รางวัลที่ 1 : รางวัลละ 6,000,000 บาท";

    let r2 = new Result();
    r2.id = "2";
    r2.value = "65"
    r2.description = "เลขท้าย 2 ตัว : รางวัลละ 2,000 บาท";
    return [r1, r2];
  }
}
