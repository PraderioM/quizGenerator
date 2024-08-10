import {Component, Input} from '@angular/core';
import {Choice, MOCK_CHOICE} from "../../../../../../models/questions/choice";
import {LANGUAGE} from "../../../../../../models/constants";

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {
  LETTERS = 'abcdefghijklmnopqrstuvwxyz'
  @Input() choice: Choice = MOCK_CHOICE;
  @Input() lang: LANGUAGE = 'english';

  getBoolString(selected: boolean) {
    return selected? 'SELECTED': 'CLICK TO SELECT';
  }

  getClass(selected: boolean) {
    return {
      'answer': true,
      'selected': selected
    };
  }

  getOptionNumbering(i: number) {
    return '&emsp;'+this.LETTERS[i]+') '
  }
}
