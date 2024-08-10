import {Discipline} from "./discipline";
import {MATHS} from "../data/maths/maths";

export type LANGUAGE = 'english' | 'spanish' | 'italian' | 'catalan';
export const LANGUAGES: LANGUAGE[] = ['english', 'spanish', 'italian', 'catalan'];
export type TextDictionary = {
  'english': string,
  'spanish': string,
  'italian': string,
  'catalan': string
}

export const DISCIPLINES: Discipline[] = [MATHS];
