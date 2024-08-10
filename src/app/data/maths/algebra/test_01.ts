import {Test} from "../../../models/test";
import {TrueFalse, TrueFalseOption} from "../../../models/questions/true.false";
import {Choice, ChoiceOption} from "../../../models/questions/choice";
import {TranslatableText} from "../../../models/translatable_text";

export const Test_01 = new Test(
  new TranslatableText('Test 01'),
  [
    new Choice(
      'The multiplicative inverse of <span class="equivalence-class">365</span> in Z<sub>2019</sub> is: [3 marks]',
      [
        new ChoiceOption('<span class="equivalence-class">143</span>'),
        new ChoiceOption('<span class="equivalence-class">614</span>'),
        new ChoiceOption('<span class="equivalence-class">1238</span>'),
        new ChoiceOption('<span class="equivalence-class">1421</span>'),
        new ChoiceOption('<span class="equivalence-class">1646</span>'),
      ]
      ),
    new Choice(`Consider the subrings<br>
        <img alt="equations" src="assets/equations.png">
    <br>of M<sub>3</sub>(C). Which of the following statements holds? [3 marks]<br>
[Hint. Start by taking two matrices in each of the forms above and looking at what form their product must take.
From this, you might deduce that the subring in question is commutative (or not), and so on.]`,
      [
        new ChoiceOption('S&#8773;T&#8773;U'),
        new ChoiceOption('S&#8773;T&#8775;U'),
        new ChoiceOption('S&#8773;U&#8775;T'),
        new ChoiceOption('T&#8773;U&#8775;S'),
        new ChoiceOption('None of the above'),
      ]
    ),
    new Choice(
      `Each ring below is equipped with its usual addition and multiplication. Which of the following statements holds? [3 marks]<br>
      [Hint. Identify whether the given rings are (i) finite or infinite as sets or (ii) have or do not have multiplicative identities. Notice that all of these properties are preserved under isomorphism.]`,
      [
        new ChoiceOption('Z<sub>2</sub>&#8773;2Z'),
        new ChoiceOption('2Z&#8773;Z&#215;Z'),
        new ChoiceOption('2Z&#215;2Z&#8773;Z'),
        new ChoiceOption('Z&#8773;2Z'),
        new ChoiceOption('None of the above')
      ]
    ),
    new Choice(
      `Consider the polynomial ring Z[x,y] in two variables x and y, and Z[x] the polynomial ring in the variable x.<br>
Let φ:Z[x,y]&#8594;Z[x] be the map defined by φ(f(x,y))=f(x,x). Which of the following statements is true? [3 marks]`,
      [
        new ChoiceOption('f(x,y)&#8712;Ker(φ) if y+x divides f(x,y)'),
        new ChoiceOption('f(x,y)&#8712;Ker(φ) if y-x divides f(x,y)'),
        new ChoiceOption('f(x,y)&#8712;Ker(φ) if yx divides f(x,y)'),
        new ChoiceOption('φ is injective, so Ker(φ)={0}'),
        new ChoiceOption('None of the above')
      ]
    ),
    new Choice(
      'Which of the following is a surjective ring homomorphism? [3 marks]',
      [
        new ChoiceOption('det: M<sub>2</sub>(C)&#8594;C mapping a matrix to its determinant'),
        new ChoiceOption('tr: M<sub>2</sub>(C)&#8594;C mapping a matrix to its trace'),
        new ChoiceOption('ɛ<sub>i</sub>: Z[x]&#8594;C mapping f(x) to its evaluation f(i) at i&#8712 C'),
        new ChoiceOption(`φ: Z[i]&#8594;M<sub>2</sub>(Z) mapping each Gaussian integer a+ib to
        <img class="center-ver" middle;" alt="matrix" src="assets/matrix.png">`
        ),
        new ChoiceOption('None of the above')
      ]
    ),
    // new TrueFalse(
    //   'For each of the following five statement, decide wheter it is true or false. [5 marks]',
    //   [
    //     new TrueFalseOption('If φ: R&#8594;S is a ring homomorphism between rings R and S, then Ker(φ) is an ideal of R.'),
    //     new TrueFalseOption('If φ: R&#8594;S is a ring homomorphism between rings R and S, then Im(φ) is an ideal of S.'),
    //     new TrueFalseOption('If φ: R&#8594;S is a ring homomorphism between rings R and S, then S&#8773;R/Ker(φ).'),
    //     new TrueFalseOption('If φ: R&#8594;S is an injective ring homomorphism between rings R and S, then R&#8773;S/Im(φ).'),
    //     new TrueFalseOption('If φ: R&#8594;S is a surjective ring homomorphism between rings R and S, then S&#8773;R/Ker(φ).')
    //   ]
    // )
  ]
)
