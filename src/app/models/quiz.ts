import {Question} from "./questions/question";

export class Quiz {
  constructor(public title: string, public questions: Question[]) {
  }

  toHTMLCode() {
    let outHTML: string = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Quiz</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
<h1>`+this.title+`</h1>`
    let i = 1
    for (let question of this.questions) {
      outHTML = outHTML + question.toHTMLCode(i);
      i = i + 1;
    }
    outHTML = outHTML + `
</body>
</html>

`;
    return outHTML
  }

  toJSON(): {title: string, questions: object[]} {
    let questions: object[] = [];
    for (let question of this.questions) {
      questions.push(question.toJSON());
    }
    return {
      'title': this.title,
      'questions': questions
    }
  }

}

export const MOCK_QUIZ = new Quiz('Mock quiz', []);
