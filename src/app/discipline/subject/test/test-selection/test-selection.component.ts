import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LANGUAGE} from "../../../../models/constants";
import {MOCK_SUBJECT, Subject} from "../../../../models/subject";
import {MOCK_TEST, Test} from "../../../../models/test";
import {TranslatableText} from "../../../../models/translatable_text";

@Component({
  selector: 'app-test-selection',
  templateUrl: './test-selection.component.html',
  styleUrls: ['./test-selection.component.css']
})
export class TestSelectionComponent {
  @Input() lang: LANGUAGE = 'english'
  @Input() subj: Subject = MOCK_SUBJECT;
  @Output() changeTest: EventEmitter<Test> = new EventEmitter<Test>();

  testSelectText: TranslatableText = new TranslatableText('Select a test', 'Selecciona un test', 'Selezziona un test', 'Selecciona un test')
  test: Test = MOCK_TEST;

  updateTest(test: Test) {
    this.test = test;
    this.changeTest.emit(test);
  }

}
