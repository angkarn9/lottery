import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ResultService } from './services/result.service';
import { Observable } from 'rxjs';
import { Result } from './model/result';

@Component({
  selector: 'lottery-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass']
})
export class ResultComponent implements OnInit {
  @Input() period: string;
  resultObservable: Observable<Result[]>;

  constructor(private service: ResultService) { }

  ngOnInit() {
    this.resultObservable = this.service.getByPeriod(this.period);
  }

}
