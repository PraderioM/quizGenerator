import {Component, Input} from '@angular/core';
import {DISCIPLINES, LANGUAGE} from "../models/constants";
import {Discipline, MOCK_DISCIPLINE} from "../models/discipline";
import {TranslatableText} from "../models/translatable_text";

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.css']
})
export class DisciplineComponent {
  @Input() lang: LANGUAGE = 'english';
  protected readonly DISCIPLINES: Discipline[] = DISCIPLINES;

  disciplineSelectText: TranslatableText = new TranslatableText('Select a discipline', 'Selecciona una disciplina', 'Selezziona una disciplina', 'Selecciona una disciplina')
  disc: Discipline = MOCK_DISCIPLINE;
  isDisciplineSelected: boolean = false;

  updateDiscipline(disc: Discipline) {
    this.disc = disc;
    this.isDisciplineSelected = this.disc !== MOCK_DISCIPLINE;
  }
}
