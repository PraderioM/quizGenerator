import {Discipline} from "../../models/discipline";
import {TranslatableText} from "../../models/translatable_text";
import {ALGEBRA} from "./algebra/algebra";

export const MATHS = new Discipline(
  new TranslatableText('Mathematics', 'Matematicas', 'Matematica', 'Matemàtica'),
  [ALGEBRA]
)
