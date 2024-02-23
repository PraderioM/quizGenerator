import {Quiz} from "./quiz";
import {TrueFalse, TrueFalseOption} from "./questions/true.false";
import {Choice, ChoiceOption} from "./questions/choice";

export const QUIZ_4 = new Quiz(
  'MATH 225 Quiz 4',
  [
    new TrueFalse(
      'Decide whether each of the following statements is true or false [12 marks]',
      [
        new TrueFalseOption('The set R={-5,-4,-3,-2,-1,0,1,2,3,4,5} is a ring with respect to the usual operations of addition and multiplication of integers.'),
        new TrueFalseOption('A ring R is commutative if there are elements a,b&#8712;R such that ab=ba.'),
        new TrueFalseOption('A ring R is commutative if a+b=b+a for each a,b&#8712;R.'),
        new TrueFalseOption('A non-zero element e of a ring R is a multiplicative identity if a+e=a for each a&#8712;R.'),
        new TrueFalseOption('A non-zero element e of a ring R is a multiplicative identity if ae=a or ea=a for each a&#8712;R.'),
        new TrueFalseOption('A non-zero element e of a commutative ring R is a multiplicative identity if ae=a or ea=a for each a&#8712;R.')
      ]
    ),
    new Choice(
      'Let R=&#8484; &#10799; 2&#8484;, where &#8484;  and 2&#8484; are equipped with the usual addition and multiplication. Which one of the following is true? [2 marks]',
      [
        new ChoiceOption('R has multiplicative identity (0,0).'),
        new ChoiceOption('R has multiplicative identity (1,0).'),
        new ChoiceOption('R has multiplicative identity (1,1).'),
        new ChoiceOption('R has multiplicative identity (1,2).'),
        new ChoiceOption('R has no multiplicative identity.'),
      ]
      ),
    new Choice(
      `The center of a ring R is the subset (actually a subring)
      <p style="text-align:center">
      Z(R)={a&#8712;R | ab=ba &#8704; b&#8712;R}
      </p>
      of R. let R=M<sub>3</sub>(&Copf;). Which one of the following is true?
      <br>
      [Hint: try to eliminate possible wrong answers, rather than working out Z(R).] [3 marks]`,
      [
        new ChoiceOption('Z(R)={0};'),
        new ChoiceOption('Z(R)={zI<sub>3</sub> | z&#8712;&Copf;}, the scalar matrices;'),
        new ChoiceOption('Z(R)={GL<sub>3</sub>(&Ropf;), the inverible matrices with real entries;'),
        new ChoiceOption('Z(R)={GL<sub>3</sub>(&Copf;), the inverible matrices;'),
        new ChoiceOption('Z(R)=R.')
      ]
    ),
    new Choice(
      `An edempotent in a ring R is an element e&#8712;R with the property e<sup>2</sup>=e.
      So, for instance 0<sub>R</sub> is an idempotent in any ring, and 1<sub>R</sub> is too in any ring
      with a multiplicative identity. Consider the ring R=M<sub>2</sub>(&Copf;).
      <br>
      Choose the correct statement from the following:
      <br>
      [Hint: again try to eliminate possible wrong answers. If you can rule out four options, whatever remains must be correct!] [3 marks]`,
      [
        new ChoiceOption('R has no idempotent.'),
        new ChoiceOption('R has exactly one idempotent.'),
        new ChoiceOption('R has exactly two idempotents.'),
        new ChoiceOption('R has exactly three idempotents.'),
        new ChoiceOption('R has four or more idempotents.'),
      ]
    ),
  ]
);
