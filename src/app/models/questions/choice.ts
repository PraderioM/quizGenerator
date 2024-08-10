import {Hint, Question} from "./question";
import {MOCK_TRANSLATABLE_TEXT, TranslatableText} from "../translatable_text";

export class ChoiceOption {
  constructor(public option: TranslatableText, public selected: boolean = false) {
  }
}

export class Choice extends Question {
  constructor(question: TranslatableText, public options: ChoiceOption[], private correct_option: number, hints: Hint[] = []) {
    super(question, 'CHOICE', hints);
  }

  getSelectedOption(): number {
    for (let i = 0; i< this.options.length; i++) {
      if (this.options[i].selected) {
        return i;
      }
    }
    return -1
  }

  selectOption(option: number) {
    if (this.getSelectedOption() === option) {
      this.options[option].selected = false;
    } else {
      this.deselectAll();
      this.options[option].selected = true;
    }
  }

  deselectAll() {
    for (let option of this.options) {
      option.selected = false;
    }
  }

  override isCorrect(): boolean {
    return this.correct_option === this.getSelectedOption();
  }

}

export const MOCK_CHOICE = new Choice(MOCK_TRANSLATABLE_TEXT, [], -1);
