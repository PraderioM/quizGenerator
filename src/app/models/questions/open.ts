import {Hint, Question} from "./question";
import {MOCK_TRANSLATABLE_TEXT, TranslatableText} from "../translatable_text";

export class Open extends Question {
  constructor(question: TranslatableText, private gt_answer: string, public answer: string = '', hints: Hint[] = []) {
    super(question, 'OPEN', hints);
  }

  override isCorrect(): boolean {
    return this.answer === this.gt_answer;
  }

}

export const MOCK_OPEN = new Open(MOCK_TRANSLATABLE_TEXT, '', '');
