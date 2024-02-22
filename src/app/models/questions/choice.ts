import {Question} from "./question";

export class ChoiceOption {
  LETTERS = 'abcdefghijklmnopqrstuvwxyz'

  constructor(public option: string, public selected: boolean = false) {
  }

  toHTMLCode(optionNumber: number):string {
    return `
    &emsp;`+this.LETTERS[optionNumber]+`) `+this.option+`&ensp;<b>`+this.getSelectedString()+`</b>
`
  }

  getSelectedString() {
    return this.selected? 'SELECTED': 'NOT SELECTED';
  }

  toJSON():object {
    return {
      'option': this.option,
      'selected': this.selected,
    }
  }
}

export class Choice extends Question {
  constructor(question: string, public options: ChoiceOption[]) {
    super(question, 'CHOICE');
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

}

export const MOCK_CHOICE = new Choice('question', []);
