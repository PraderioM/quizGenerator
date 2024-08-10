import {Component, Input} from '@angular/core';
import {MOCK_TEST, Test} from "../../../../models/test";
import {LANGUAGE} from "../../../../models/constants";
import {TranslatableText} from "../../../../models/translatable_text";

@Component({
  selector: 'app-test-body',
  templateUrl: './test-body.component.html',
  styleUrls: ['./test-body.component.css']
})
export class TestBodyComponent {
  @Input() lang: LANGUAGE = 'english';
  @Input() test: Test = MOCK_TEST;

  checkAnswers: TranslatableText = new TranslatableText('Check answers', 'Evalua respuestas', 'Valuta risposte', 'Evalua respostes');
  attempt: number = 0;

  newAttempt() {
    this.attempt = this.attempt + 1;
  }
}
