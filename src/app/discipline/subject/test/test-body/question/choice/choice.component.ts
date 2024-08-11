import {Component, Input} from '@angular/core';
import {Choice, MOCK_CHOICE} from "../../../../../../models/questions/choice";
import {LANGUAGE} from "../../../../../../models/constants";
import {TranslatableText} from "../../../../../../models/translatable_text";

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {
  LETTERS = 'abcdefghijklmnopqrstuvwxyz'
  @Input() choice: Choice = MOCK_CHOICE;
  @Input() lang: LANGUAGE = 'english';

  selectedText: TranslatableText = new TranslatableText('SELECTED', 'SELECCIONADO', 'SELEZZIONATO', 'SELECCIONAT');
  notSelectedText: TranslatableText = new TranslatableText('CLICK TO SELECT', 'HAZ CLICK PARA SELECCIONAR', 'FAI CLICK PER SELEZZIONARE', 'FES CLICK PER SELECCIONAR');

  getBoolString(selected: boolean) {
    return selected? this.selectedText.getText(this.lang): this.notSelectedText.getText(this.lang);
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
