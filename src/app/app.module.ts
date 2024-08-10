import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './quiz/question/question.component';
import { ChoiceComponent } from './quiz/question/choice/choice.component';
import { TrueFalseComponent } from './quiz/question/true-false/true-false.component';
import { LanguageSelectionComponent } from './language-selection/language-selection.component';
import { DisciplineComponent } from './discipline/discipline.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    ChoiceComponent,
    TrueFalseComponent,
    LanguageSelectionComponent,
    DisciplineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
