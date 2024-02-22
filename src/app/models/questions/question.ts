export class Question {
  constructor(public question: string, private type: string) {
  }
  toHTMLCode(questionNumber: number): string {
    return this.getHTMLCodeQuestion(questionNumber) + this.getHTMLCodeOptions()
  }

  toJSON(): object {
    return {
      'question': this.question,
      'type': this.type,
      'options': this.getOptionsJSON(),
    };
  }

  getHTMLCodeQuestion(questionNumber: number) {
    return `
  <h3>
&emsp;`+questionNumber+`) `+ this.question+`
  </h3>`
  }

  getHTMLCodeOptions(): string {
    return 'The getHTMLCodeOptions must be implemented.'
  }

  getOptionsJSON(): object {
    return {'ERROR': 'The getOptionsJSON must be implemented.'}
  }

}

export const MOCK_QUESTION = new Question('question', 'MOCK_QUESTION');
