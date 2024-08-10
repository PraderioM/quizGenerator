import {Test} from "../../../models/test";
import {TrueFalse, TrueFalseOption} from "../../../models/questions/true.false";
import {Choice, ChoiceOption} from "../../../models/questions/choice";
import {TranslatableText} from "../../../models/translatable_text";
import {Hint} from "../../../models/questions/question";

export const Test_00 = new Test(
  new TranslatableText('Test 00'),
  [
    new TrueFalse(
      new TranslatableText(
        'Decide whether each of the following statements is true or false',
        'Decide si cada una de las siguientes afirmaciones és cierta o falsa',
        'Decidi se ognuna delle seguenti frasi è vera o falsa',
        'Per cadascuna de les següents afirmacions escull si és certa o falsa'
        ),
      [
        new TrueFalseOption(
          new TranslatableText(
            'The set R={-5,-4,-3,-2,-1,0,1,2,3,4,5} is a ring with respect to the usual operations of addition and multiplication of integers.'
          ),
          false
        ),
        new TrueFalseOption(
          new TranslatableText(
            'A ring R is commutative if there are elements a,b&#8712;R such that ab=ba.'
          ),
          false
        ),
        new TrueFalseOption(
          new TranslatableText('A ring R is commutative if a+b=b+a for each a,b&#8712;R.'),
          false
        ),
        new TrueFalseOption(
          new TranslatableText('A non-zero element e of a ring R is a multiplicative identity if a+e=a for each a&#8712;R.'),
          false
        ),
        new TrueFalseOption(
          new TranslatableText('A non-zero element e of a ring R is a multiplicative identity if ae=a or ea=a for each a&#8712;R.'),
          false
        ),
        new TrueFalseOption(
          new TranslatableText('A non-zero element e of a commutative ring R is a multiplicative identity if ae=a or ea=a for each a&#8712;R.'),
          true
        )
      ]
    ),
    new Choice(
      new TranslatableText('Let R=&#8484; &#10799; 2&#8484;, where &#8484;  and 2&#8484; are equipped with the usual addition and multiplication. Which one of the following is true?'),
      [
        new ChoiceOption(new TranslatableText('R has multiplicative identity (0,0).')),
        new ChoiceOption(new TranslatableText('R has multiplicative identity (1,0).')),
        new ChoiceOption(new TranslatableText('R has multiplicative identity (1,1).')),
        new ChoiceOption(new TranslatableText('R has multiplicative identity (1,2).')),
        new ChoiceOption(new TranslatableText('R has no multiplicative identity.')),
      ],
      4
      ),
    new Choice(
      new TranslatableText(`The center of a ring R is the subset (actually a subring)
      <p style="text-align:center">
      Z(R)={a&#8712;R | ab=ba &#8704; b&#8712;R}
      </p>
      of R. Let R=M<sub>3</sub>(&Copf;). Which one of the following is true?`),
      [
        new ChoiceOption(new TranslatableText('Z(R)={0};')),
        new ChoiceOption(new TranslatableText('Z(R)={zI<sub>3</sub> | z&#8712;&Copf;}, the scalar matrices;')),
        new ChoiceOption(new TranslatableText('Z(R)={GL<sub>3</sub>(&Ropf;), the invertible matrices with real entries;')),
        new ChoiceOption(new TranslatableText('Z(R)={GL<sub>3</sub>(&Copf;), the invertible matrices;')),
        new ChoiceOption(new TranslatableText('Z(R)=R.'))
      ],
      1
    ),
    new Choice(
      new TranslatableText(`An idempotent in a ring R is an element e&#8712;R with the property e<sup>2</sup>=e.
      So, for instance 0<sub>R</sub> is an idempotent in any ring, and 1<sub>R</sub> is too in any ring
      with a multiplicative identity. Consider the ring R=M<sub>2</sub>(&Copf;).
      <br>
      Choose the correct statement from the following:`),
      [
        new ChoiceOption(new TranslatableText('R has no idempotent.')),
        new ChoiceOption(new TranslatableText('R has exactly one idempotent.')),
        new ChoiceOption(new TranslatableText('R has exactly two idempotents.')),
        new ChoiceOption(new TranslatableText('R has exactly three idempotents.')),
        new ChoiceOption(new TranslatableText('R has four or more idempotents.')),
      ],
      4,
      [new Hint(new TranslatableText('Try to eliminate possible wrong answers. If you can rule out four options, whatever remains must be correct!'))]
    ),
  ]
);
