import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {LANGUAGE} from "../../../models/constants";
import {MOCK_SUBJECT, Subject} from "../../../models/subject";
import {Test, MOCK_TEST} from "../../../models/test";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Input() lang: LANGUAGE = 'english';
  @Input() subj: Subject = MOCK_SUBJECT;

  test: Test = MOCK_TEST;
  isTestSelected: boolean = false;

  updateTest(test: Test) {
    this.test = test;
    this.isTestSelected = this.test !== MOCK_TEST;
  }
}
