import {Question} from "./questions/question";
import {MOCK_TRANSLATABLE_TEXT, TranslatableText} from "./translatable_text";
import {LANGUAGE} from "./constants";

export class Test {
  constructor(public name: TranslatableText, public questions: Question[]) {
  }

  getName(lang: LANGUAGE) {
    return this.name.getText(lang);
  }

}

export const MOCK_TEST = new Test(MOCK_TRANSLATABLE_TEXT, []);
