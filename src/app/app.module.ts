import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionComponent } from './discipline/subject/test/test-body/question/question.component';
import { ChoiceComponent } from './discipline/subject/test/test-body/question/choice/choice.component';
import { TrueFalseComponent } from './discipline/subject/test/test-body/question/true-false/true-false.component';
import { LanguageSelectionComponent } from './language-selection/language-selection.component';
import { DisciplineComponent } from './discipline/discipline.component';
import { SubjectComponent } from './discipline/subject/subject.component';
import { TestComponent } from './discipline/subject/test/test.component';
import { TestSelectionComponent } from './discipline/subject/test/test-selection/test-selection.component';
import { TestBodyComponent } from './discipline/subject/test/test-body/test-body.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ChoiceComponent,
    TrueFalseComponent,
    LanguageSelectionComponent,
    DisciplineComponent,
    SubjectComponent,
    TestComponent,
    TestSelectionComponent,
    TestBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
