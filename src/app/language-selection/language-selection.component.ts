import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LANGUAGE, LANGUAGES} from "../models/constants";
import {TranslatableText} from "../models/translatable_text";

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.css']
})
export class LanguageSelectionComponent {
  @Input() lang: LANGUAGE = 'english'
  @Output() changeLanguage :EventEmitter<LANGUAGE> = new EventEmitter<LANGUAGE>();

  protected readonly LANGUAGES = LANGUAGES;
  languageSelectText: TranslatableText = new TranslatableText('Select your language', 'Selecciona tu lengua', 'Selezziona la tua lingua', 'Selecciona la teva llengua')
  languageText: TranslatableText = new TranslatableText('English', 'Español', 'Italiano', 'Català')

  updateLanguage(lang: LANGUAGE): void {
    this.changeLanguage.emit(lang);
  }
}
