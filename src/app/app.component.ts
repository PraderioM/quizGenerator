import { Component } from '@angular/core';
import {LANGUAGE} from "./models/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lang : LANGUAGE = 'english';

  updateLanguage(lang: LANGUAGE) {
    this.lang = lang;
  }
}
