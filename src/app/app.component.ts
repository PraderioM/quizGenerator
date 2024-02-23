import { Component } from '@angular/core';
import {Quiz} from "./models/quiz";
import {QUIZ_4} from "./models/quiz_4";
import {Tutor, TUTORS} from "./models/tutors";

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
  DEFAULT_WORKSHOP = 'select your workshop';
  MOCK_TUTOR: Tutor = new Tutor('name', 'surname', 'email', []);
  selectedWorkshop: string = this.DEFAULT_WORKSHOP;

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
    const quizJSON = this.quiz.toJSON(this.name,
                                                             this.surname,
                                                             this.selectedWorkshop,
                                                             this.getTutor(this.selectedWorkshop))
    const blob = new Blob([JSON.stringify(quizJSON)], {type: 'application/octet-stream'});
    let anchor: HTMLAnchorElement = document.createElement('a');
    anchor.download = this.name + "_" + this.surname + ".json";
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.click();
  }

  isNameComplete() {
    if (this.name === '') {
      return false;
    }
    if (this.surname === '') {
      return false
    }
    return this.selectedWorkshop !== this.DEFAULT_WORKSHOP

  }

  getWorkshops():string[] {
    let workshops: string[] = [];
    for (let tutor of TUTORS) {
      workshops = workshops.concat(tutor.groups);
    }
    return [this.DEFAULT_WORKSHOP].concat(workshops.sort());
  }

  updateSelectedWorkshop(workshop: string) {
    this.selectedWorkshop = workshop
  }

  getTutor(workshop: string): Tutor {
    for (let tutor of TUTORS) {
      if (tutor.groups.includes(workshop)) {
        return tutor;
      }
    }
    return this.MOCK_TUTOR;
  }

  getTutorName(workshop: string) {
    if (workshop === this.DEFAULT_WORKSHOP) {
      return ''
    }

    return ' (tutor: ' + this.getTutor(workshop).name + ')';
  }
}
