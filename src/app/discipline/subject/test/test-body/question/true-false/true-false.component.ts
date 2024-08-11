import {Component, Input} from '@angular/core';
import {MOCK_TRUE_FALSE, TrueFalse} from "../../../../../../models/questions/true.false";
import {LANGUAGE} from "../../../../../../models/constants";
import {TranslatableText} from "../../../../../../models/translatable_text";

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent {
  LETTERS = 'abcdefghijklmnopqrstuvwxyz'
  @Input() trueFalse: TrueFalse = MOCK_TRUE_FALSE;
  @Input() lang: LANGUAGE = 'english';

  unansweredText: TranslatableText = new TranslatableText('CLICK TO ANSWER', 'HAZ CLICK PARA CONTESTAR', 'FAI CLICK PER RISPONDERE', 'FES CLICK PER CONTESTAR');
  trueText: TranslatableText = new TranslatableText('TRUE', 'VERDADERO', 'VERO', 'CERT');
  falseText: TranslatableText = new TranslatableText('FALSE', 'FALSO', 'FALSO', 'FALS');

  getBoolString(is_true: boolean | null): string {
    if (is_true === null) {
      return this.unansweredText.getText(this.lang);
    } else {
      return is_true ? this.trueText.getText(this.lang) : this.falseText.getText(this.lang);
    }
  }

  getClass(is_true: boolean | null) {
    return {
      'answer': true,
      'true': is_true !== null && is_true,
      'false': is_true !== null && !is_true
    };
  }

  getOptionNumbering(i: number) {
    return '&emsp;'+this.LETTERS[i]+') '
  }
}
