import {MOCK_TRANSLATABLE_TEXT, TranslatableText} from "./translatable_text";
import {LANGUAGE} from "./constants";
import {Subject} from "./subject";

export class Discipline {
  constructor(private name: TranslatableText, public subjects: Subject[]) {

  }

  getName(lang: LANGUAGE) {
    return this.name.getText(lang);
  }
}

export const MOCK_DISCIPLINE = new Discipline(MOCK_TRANSLATABLE_TEXT, [])
