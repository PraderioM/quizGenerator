import { Component } from '@angular/core';
import {Quiz} from "./models/quiz";
import {QUIZ_4} from "./models/quiz_4";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-generator';
  name: string = '';
  surname: string = '';
  quiz: Quiz = QUIZ_4;

  downloadDocuments() {
    this.downloadHTML();
    this.downloadJSON();
  }

  downloadHTML() {
    const blob = new Blob([this.quiz.toHTMLCode()], {type: 'application/octet-stream'});
    let anchor: HTMLAnchorElement = document.createElement('a');
    anchor.download = this.name + "_" + this.surname + ".html";
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.click();
  }

  downloadJSON() {
    const blob = new Blob([JSON.stringify(this.quiz.toJSON())], {type: 'application/octet-stream'});
    let anchor: HTMLAnchorElement = document.createElement('a');
    anchor.download = this.name + "_" + this.surname + ".json";
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.click();
  }

  isNameComplete() {
    if (this.name === '') {
      return false;
    }
    return this.surname !== '';

  }
}
