import {MOCK_TRANSLATABLE_TEXT, TranslatableText} from "../translatable_text";

export class Hint {
  constructor(public hint: TranslatableText) { }

}


export class Question {
  constructor(public question: TranslatableText, private question_type: string, public hints: Hint[] = []) {
  }

  isCorrect(): boolean {
    return false
  }

}

export const MOCK_QUESTION = new Question(MOCK_TRANSLATABLE_TEXT, 'MOCK_QUESTION');
