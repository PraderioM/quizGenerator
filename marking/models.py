from typing import Dict, List, Union

QuestionType = Union['CHOICE', 'TRUE-FALSE']
OptionType = QuestionType


class Option:
    def __init__(self, option: str):
        self.option = option

    @classmethod
    def fromJSON(cls, json_data: Dict, option_type: OptionType):
        if option_type == Choice.TYPE:
            return ChoiceOption.fromJSON(json_data)
        elif option_type == TrueFalse.TYPE:
            return TrueFalseOption.fromJSON(json_data)
        else:
            raise ValueError('Unsupported option type')


class ChoiceOption(Option):
    TYPE = 'CHOICE'

    def __init__(self, option: str, selected: bool):
        super().__init__(option=option)
        self.selected = selected

    @classmethod
    def fromJSON(cls, json_data: Dict, option_type='CHOICE'):
        return ChoiceOption(json_data['option'], selected=json_data['selected'])
        pass


class TrueFalseOption(Option):
    TYPE = 'TRUE-FALSE'

    def __init__(self, option: str, is_true: str):
        super().__init__(option=option)
        self.is_true = is_true

    @classmethod
    def fromJSON(cls, json_data: Dict, option_type='TRUE-FALSE'):
        return TrueFalseOption(json_data['option'], json_data['is_true'])


class Question:
    def __init__(self, question, options: List[Option], question_type: QuestionType,
                 points_correct: float, points_wrong: float = 0.):
        self.question = question
        self.options = options
        self.question_type = question_type
        self._points_correct = points_correct
        self._points_wrong = points_wrong

    @classmethod
    def fromJSON(cls, json_data: Dict):
        if json_data['type'] == Choice.TYPE:
            return Choice.fromJSON(json_data)
        elif json_data['type'] == TrueFalse.TYPE:
            return TrueFalse.fromJSON(json_data)
        else:
            raise ValueError('Unsupported question type')

    def getPoints(self):
        raise NotImplementedError()

    def getMark(self, answer) -> float:
        raise NotImplementedError()

    def getDifferentAnswers(self, answer) -> List[int]:
        raise NotImplementedError()


class Choice(Question):
    TYPE = ChoiceOption.TYPE

    def __init__(self, question: str, options: List[ChoiceOption], points_correct: float):
        super().__init__(question=question, options=options, question_type=self.TYPE,
                         points_correct=points_correct, points_wrong=0)

    @classmethod
    def fromJSON(cls, json_data: Dict):
        return Choice(question=json_data['question'],
                      options=[ChoiceOption.fromJSON(option_data) for option_data in json_data['options']],
                      points_correct=json_data.get('points_correct', 0.))

    def getSelectedOption(self):
        i = 0
        for option in self.options:
            if option.selected:
                return i
            i += 1

        return -1

    def getPoints(self):
        return self._points_correct

    def getMark(self, answer: Question) -> float:
        for i in range(len(self.options)):
            if self.options[i].selected != answer.options[i].selected:
                return self._points_wrong

        return self._points_correct

    def getDifferentAnswers(self, answer: Question):
        for i in range(len(self.options)):
            if self.options[i].selected != answer.options[i].selected:
                return [i]

        return []


class TrueFalse(Question):
    TYPE = TrueFalseOption.TYPE

    def __init__(self, question: str, options: List[TrueFalseOption],
                 points_correct: float, points_wrong: float = 0.):
        super().__init__(question=question, options=options, question_type=self.TYPE,
                         points_correct=points_correct, points_wrong=points_wrong)

    @classmethod
    def fromJSON(cls, json_data: Dict):
        return TrueFalse(question=json_data['question'],
                         options=[TrueFalseOption.fromJSON(option_data) for option_data in json_data['options']],
                         points_correct=json_data.get('points_correct', 0.),
                         points_wrong=json_data.get('points_wrong', 0.))

    def getPoints(self):
        return self._points_correct * len(self.options)

    def getMark(self, answer: Question) -> float:
        mark = 0
        for i in range(len(self.options)):
            if self.options[i].is_true == answer.options[i].is_true:
                mark += self._points_correct
            else:
                mark += self._points_wrong

        return mark

    def getDifferentAnswers(self, answer: Question) -> List[int]:
        different_answers = []
        for i in range(len(self.options)):
            if self.options[i].is_true != answer.options[i].is_true:
                different_answers.append(i)

        return different_answers


class Quiz:
    LETTERS = 'abcdefghijklmnopqrstuvwxyz'
    QUESTION_PREFIX = 'QUESTION '
    QUESTION_SUFFIX = ')'

    def __init__(self, title: str, name: str, surname: str, workshop: str, tutor: str, questions: List[Question]):
        self.title = title
        self.name = name
        self.surname = surname
        self.workshop = workshop
        self.tutor = tutor
        self.questions = questions

    @classmethod
    def fromJSON(cls, json_data: Dict[str, Union[str, List[Question]]]):
        questions = [Question.fromJSON(question) for question in json_data["questions"]]

        return cls(title=json_data["title"],
                   name=json_data["name"], surname=json_data["surname"],
                   workshop=json_data["workshop"], tutor=json_data["tutor"],
                   questions=questions)

    def getPoints(self):
        total_points = 0.
        for question in self.questions:
            total_points += question.getPoints()

        return total_points

    def getMark(self, answer) -> float:
        mark = 0.
        for i in range(len(self.questions)):
            mark += self.questions[i].getMark(answer=answer.questions[i])

        return mark

    def getErrorReport(self, answer) -> Dict[str, Dict[str, int]]:
        error_report = {}

        for i in range(len(self.questions)):
            question = self.questions[i]
            errors = question.getDifferentAnswers(answer=answer.questions[i])
            error_report[self.QUESTION_PREFIX + str(i+1)] = {
                self.LETTERS[j]+self.QUESTION_SUFFIX: (1 if j in errors else 0) for j in range(len(question.options))
            }

        return error_report
