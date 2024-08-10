import {Component, Input} from '@angular/core';
import {LANGUAGE} from "../../../../../../models/constants";
import {MOCK_OPEN, Open} from "../../../../../../models/questions/open";

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent {
  @Input() open: Open = MOCK_OPEN;
  @Input() lang: LANGUAGE = 'english';
}
