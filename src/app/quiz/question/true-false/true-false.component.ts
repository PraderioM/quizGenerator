import {Component, Input} from '@angular/core';
import {MOCK_TRUE_FALSE, TrueFalse} from "../../../models/questions/true.false";

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent {
  LETTERS = 'abcdefghijklmnopqrstuvwxyz'
  @Input() trueFalse: TrueFalse = MOCK_TRUE_FALSE;

  getBoolString(is_true: boolean | null): string {
    if (is_true === null) {
      return 'CLICK TO ANSWER'
    } else {
      return is_true ? 'TRUE' : 'FALSE';
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
