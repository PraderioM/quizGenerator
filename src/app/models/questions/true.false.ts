import {Hint, Question} from "./question";
import {MOCK_TRANSLATABLE_TEXT, TranslatableText} from "../translatable_text";

export class TrueFalseOption {
  constructor(public option: TranslatableText, private gt_is_true: boolean, public is_true: boolean | null = null) { }

  toggleIsTrue() {
    if (this.is_true === null) {
      this.is_true = true;
    } else {
      this.is_true = !this.is_true;
    }
  }

  isCorrect() {
    if (this.is_true === null) {
      return false
    } else {
      return this.gt_is_true === this.is_true;
    }
  }

}

export class TrueFalse extends Question {
  constructor(question: TranslatableText,  public options: TrueFalseOption[], hints: Hint[] = []) {
    super(question, 'TRUE-FALSE', hints);
  }

  override isCorrect(): boolean {
    for (let option of this.options) {
      if (!option.isCorrect()) {
        return false;
      }
    }
    return true;
  }
}

export const MOCK_TRUE_FALSE = new TrueFalse(MOCK_TRANSLATABLE_TEXT, []);
