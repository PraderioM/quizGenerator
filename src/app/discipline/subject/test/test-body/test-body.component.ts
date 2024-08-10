import {Component, Input} from '@angular/core';
import {MOCK_TEST, Test} from "../../../../models/test";
import {LANGUAGE} from "../../../../models/constants";

@Component({
  selector: 'app-test-body',
  templateUrl: './test-body.component.html',
  styleUrls: ['./test-body.component.css']
})
export class TestBodyComponent {
  @Input() lang: LANGUAGE = 'english';
  @Input() test: Test = MOCK_TEST;

}
