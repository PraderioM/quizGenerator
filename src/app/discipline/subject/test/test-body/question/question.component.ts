import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Hint, MOCK_QUESTION, Question} from "../../../../../models/questions/question";
import {MOCK_TRUE_FALSE, TrueFalse} from "../../../../../models/questions/true.false";
import {Choice, MOCK_CHOICE} from "../../../../../models/questions/choice";
import {LANGUAGE} from "../../../../../models/constants";
import {MOCK_OPEN, Open} from "../../../../../models/questions/open";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnChanges{
  @Input() lang: LANGUAGE = 'english';
  @Input() attempt: number = 0;
  @Input() question: Question = MOCK_QUESTION;
  @Input() questionNumber: number = 0;

  isCorrect: boolean | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['attempt'] && !changes['attempt'].firstChange && changes['attempt'].currentValue !== 0) {
      if (changes['attempt'].currentValue - changes['attempt'].previousValue > 0) {
        this.isCorrect = this.question.isCorrect();
      }
    }
  }

  isChoice(): boolean { return this.question instanceof Choice; }
  isTrueFalse(): boolean { return this.question instanceof TrueFalse; }
  isOpen(): boolean { return this.question instanceof Open; }

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

  getOpen() {
    if (this.question instanceof Open) {
      return this.question;
    } else {
      return MOCK_OPEN;
    }
  }

  getQuestionNumbering() {
    return (this.questionNumber+1).toString()+') ';
  }

  getHints(): Hint[] {
    if (this.isCorrect || this.isCorrect === null) {
      return [];
    } else {
      return this.question.hints.slice(0, this.attempt);
    }
  }

  getQuestionClass() {
    return {
      'correct': this.isCorrect !== null && this.isCorrect,
      'wrong': this.isCorrect !== null && !this.isCorrect
    };
  }
}
