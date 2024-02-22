import {Question} from "./question";

export class TrueFalseOption {
  LETTERS = 'abcdefghijklmnopqrstuvwxyz'

  constructor(public option: string, public is_true: boolean | null = null) { }

  toHTMLCode(optionNumber: number):string {
    return `
    &emsp;`+this.LETTERS[optionNumber]+`) `+this.option+`<b>`+this.getStringAnswer()+`</b>
`
  }

  toJSON():object {
    return {
      'option': this.option,
      'is_true': this.getStringAnswer(),
    }
  }

  getStringAnswer() {
    let string_val:string = '';
    if (this.is_true === null) {
      string_val = 'UNANSWERED';
    } else {
      string_val = this.is_true ? 'TRUE' : 'FALSE'
    }
    return string_val;
  }

  toggleIsTrue() {
    if (this.is_true === null) {
      this.is_true = true;
    } else {
      this.is_true = !this.is_true;
    }
  }

}

export class TrueFalse extends Question {
  constructor(question: string,  public options: TrueFalseOption[]) {
    super(question, 'TRUE-FALSE');
  }

  override getHTMLCodeOptions(): string {
    let outHTMLCode = '';
    let i = 0;
    for (let option of this.options) {
      outHTMLCode = outHTMLCode + `
    <br>` + option.toHTMLCode(i);
      i = i + 1;
    }
    return outHTMLCode;
  }

  override getOptionsJSON(): object[] {
    let options: object[] = [];
    for (let option of this.options) {
      options.push(option.toJSON());
    }
    return options;
  }
}

export const MOCK_TRUE_FALSE = new TrueFalse('question', []);
