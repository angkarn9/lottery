import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Dropdown } from './model/dropdown';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss']
})
export class LottoComponent implements OnInit {

  criterSearchForm: FormGroup;
  periodDateList: Dropdown[];
  resultMessage: string;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.periodDateList = [
      { value: '25611230', desc: '30 ธันวาคม 2561' },
      { value: '25620117', desc: '17 มกราคม 2562' }
    ];

    this.criterSearchForm = this.fb.group({
      periodDate: ['25611230'],
      lottoNumber: ['']
    });
  }

  onSearch() {
    if (this.criterSearchForm.invalid) {
      return;
    }

    this.resultMessage = 'คุณถูกหวย';
  }

  onClear() {
    this.criterSearchForm.reset();
    this.resultMessage = '';
  }
}
