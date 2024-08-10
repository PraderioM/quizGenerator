import {Component, Input} from '@angular/core';
import {LANGUAGE} from "../../models/constants";
import {Discipline, MOCK_DISCIPLINE} from "../../models/discipline";
import {TranslatableText} from "../../models/translatable_text";
import {MOCK_SUBJECT, Subject} from "../../models/subject";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  @Input() lang: LANGUAGE = 'english';
  @Input() disc: Discipline = MOCK_DISCIPLINE;

  subjectSelectText: TranslatableText = new TranslatableText('Select a subject', 'Selecciona una materia', 'Selezziona una materia', 'Selecciona una matèria')
  subj: Subject = MOCK_SUBJECT;
  isSubjectSelected: boolean = false;

  updateSubject(subj: Subject): void {
    this.subj = subj;
    this.isSubjectSelected = this.subj !== MOCK_SUBJECT;
  }
}
