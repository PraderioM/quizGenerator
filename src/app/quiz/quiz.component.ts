import {Component, Input} from '@angular/core';
import {Quiz} from "../models/quiz";
import {QUIZ_4} from "../models/quiz_4";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  @Input() quiz: Quiz = QUIZ_4;

}
