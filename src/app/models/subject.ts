import {MOCK_TRANSLATABLE_TEXT, TranslatableText} from "./translatable_text";
import {LANGUAGE} from "./constants";
import {Test} from "./test";

export class Subject {
  constructor(private name: TranslatableText, public tests: Test[]) { }

  getName(lang: LANGUAGE) {
    return this.name.getText(lang);
  }
}

export const MOCK_SUBJECT = new Subject(MOCK_TRANSLATABLE_TEXT, []);
