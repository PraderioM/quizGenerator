import {TranslatableText} from "./translatable_text";
import {LANGUAGE} from "./constants";

export class Discipline {
  constructor(private name: TranslatableText) {

  }

  getName(lang: LANGUAGE) {
    return this.name.getText(lang);
  }
}
