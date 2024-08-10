import {Subject} from "../../../models/subject";
import {TranslatableText} from "../../../models/translatable_text";
import {Test_00} from "./test_00";
import {Test_01} from "./test_01";

export const ALGEBRA: Subject = new Subject(
  new TranslatableText('Algebra', 'Álgebra', 'Algebra', 'Àlgebra'),
  [Test_00, Test_01],
);
