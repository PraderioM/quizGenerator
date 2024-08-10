import {Component, Input} from '@angular/core';
import {DISCIPLINES, LANGUAGE, LANGUAGES} from "../models/constants";
import {Discipline} from "../models/discipline";
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

}
