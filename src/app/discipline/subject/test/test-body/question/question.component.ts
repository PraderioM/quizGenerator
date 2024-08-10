import {Component, Input} from '@angular/core';
import {MOCK_QUESTION, Question} from "../../../../../models/questions/question";
import {MOCK_TRUE_FALSE, TrueFalse} from "../../../../../models/questions/true.false";
import {Choice, MOCK_CHOICE} from "../../../../../models/questions/choice";
import {LANGUAGE} from "../../../../../models/constants";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() lang: LANGUAGE = 'english';
  @Input() question: Question = MOCK_QUESTION;
  @Input() questionNumber: number = 0;

  isChoice(): boolean { return this.question instanceof Choice; }
  isTrueFalse(): boolean { return this.question instanceof TrueFalse; }

  getChoice(): Choice {
    if (this.question instanceof Choice) {
      return this.question;
    } else {
      return MOCK_CHOICE;
    }
  }

  getTrueFalse(): TrueFalse {
    if (this.question instanceof TrueFalse) {
      return this.question;
    } else {
      return MOCK_TRUE_FALSE;
    }
  }

  getQuestionNumbering() {
    return (this.questionNumber+1).toString()+') ';
  }
}
