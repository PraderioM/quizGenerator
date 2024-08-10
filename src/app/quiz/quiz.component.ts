import {Component, Input} from '@angular/core';
import {Quiz} from "../models/quiz";
import {Quiz_00} from "../data/maths/abstract-algebra/quiz_00";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  @Input() quiz: Quiz = Quiz_00;

}
