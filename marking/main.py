from typing import Dict, Tuple, List
import json
from glob import glob
from os.path import join

from models import Quiz


SOLUTION_PATH = './solution.json'
ANSWERS_PATH = './quiz-answers'


def print_results(results: Dict[str: List[Tuple[str, str, float]]]):
    print('The marks to introduce on moodle are:')
    for workshop, marks in results.items():
        marks.sort(key=lambda res: res[1])
        print(f'\n\nWORKSHOP: {workshop}')
        for name, surname, mark in marks:
            print(f'\t{surname}, {name}: {marks}')


def print_error_report(errors: Dict[str: Dict[str:int]], total_answers: int):
    error_list: List[Tuple[str, float]] = []
    for question, question_errors in errors.items():
        for option, option_errors in question_errors.items():
            error_list.append((' '.join([question, option]), option_errors))

    error_list.sort(key=lambda err: err[1], reverse=True)

    print('The following are the percentages of mistakes per question made (from most to least common):')
    print('Question\terror%')
    for question, error in error_list:
        print(f'{question}\t{100*error/total_answers:.2f}')


def main():
    with open(SOLUTION_PATH, 'r') as f:
        solution = Quiz.fromJSON(json.load(f))

    error_report: Dict[str: int] = {}
    results: Dict[str: List[Tuple[str, str, float]]] = {}
    n = 0

    for answer_path in glob(join(ANSWERS_PATH, '*')):
        n += 1
        with open(answer_path, 'r') as f:
            answer = Quiz.fromJSON(json.load(f))

            if answer.workshop in results.keys():
                results[answer.workshop].append((answer.name, answer.surname, solution.getMark(answer)))
            else:
                results[answer.workshop] = [(answer.name, answer.surname, solution.getMark(answer))]

            new_errors = solution.getErrorReport(answer)

            for question_name, question in new_errors.items():
                for option_name, is_wrong in question.items():
                    error_report[question_name][option_name] += is_wrong

    print_results(results)
    print_error_report(error_report, n)


if __name__ == '__main__':
    main()
