import {LANGUAGE, TextDictionary} from "./constants";


export class TranslatableText {
  private readonly UNAVAILABLE_LANGUAGE: TextDictionary = {
    'english': '(this text is not available in English) ',
    'spanish': '(este texto no está disponible en Español) ',
    'italian': '(questo testo non è disponible in Italiano) ',
    'catalan': '(aquest text no està disponible en Català) ',
  };

  private readonly DEFAULT_LANGUAGE: LANGUAGE = 'english'
  private readonly text_dictionary: TextDictionary;

  constructor(english: string,
              spanish: string = '',
              italian: string = '',
              catalan: string = '') {
    this.text_dictionary = {
      'english': english,
      'spanish': spanish,
      'italian': italian,
      'catalan': catalan
    };
  }

  getText(lang: LANGUAGE): string {
    if (this.text_dictionary[lang] === '') {
      return this.UNAVAILABLE_LANGUAGE[lang] + this.text_dictionary[this.DEFAULT_LANGUAGE];
    } else {
      return this.text_dictionary[lang];
    }
  }
}

export const MOCK_TRANSLATABLE_TEXT = new TranslatableText('', '', '', '')
