from typing import Dict, Tuple, List, Optional
import json
from glob import glob
from os.path import join

from models import Quiz


SOLUTION_PATH = './solution.json'
ANSWERS_PATH = './quiz-answers'
MARKS_PATH = './marks'
ERROR_REPORT_PATH = './error_report'


def print_results(results: Dict[str, List[Tuple[str, str, float]]],
                  marks_path: Optional[str] = None) -> None:
    print('The marks to introduce on moodle are:')
    lines: List[str] = []

    for workshop, marks in results.items():
        marks.sort(key=lambda res: res[1]+res[0])
        msg = f'\n\nWORKSHOP: {workshop}'
        print(msg)
        lines.append(msg)
        for name, surname, mark in marks:
            msg = f'\t{surname}, {name}: {mark}'
            print(msg)
            lines.append(msg)

    if marks_path is not None:
        with open(marks_path, 'w') as out_file:
            out_file.write('\n'.join(lines))
        print(f'the marks were stored in "{marks_path}".')


def print_error_report(errors: Dict[str, Dict[str, int]], total_answers: int,
                       error_report_path: Optional[str] = None) -> None:
    error_list: List[Tuple[str, float]] = []
    for question, question_errors in errors.items():
        for option, option_errors in question_errors.items():
            error_list.append((' '.join([question, option]), option_errors))

    error_list.sort(key=lambda err: err[1], reverse=True)

    print('The following are the percentages of mistakes per question made (from most to least common):')
    lines: List[str] = []
    msg = 'Question\t\terror%'
    print(msg)
    lines.append(msg)

    for question, error in error_list:
        if error > 0:
            msg = f'{question}:\t{100*error/total_answers:.2f}%'
            print(msg)
            lines.append(msg)

    if error_report_path is not None:
        with open(error_report_path, 'w') as error_report:
            error_report.write('\n'.join(lines))
        print(f'the error report was stored in "{error_report_path}".')


def main():
    with open(SOLUTION_PATH, 'r') as solution_file:
        json_data = json.load(solution_file)
        solution = Quiz.fromJSON(json_data=json_data)

    error_report: Dict[str: int] = {}
    results: Dict[str: List[Tuple[str, str, float]]] = {}
    n = 0

    for answer_path in glob(join(ANSWERS_PATH, '*.json')):
        n += 1
        with open(answer_path, 'r') as answer_file:
            answer = Quiz.fromJSON(json.load(answer_file))

            if answer.workshop in results.keys():
                results[answer.workshop].append((answer.name, answer.surname, solution.getMark(answer)))
            else:
                results[answer.workshop] = [(answer.name, answer.surname, solution.getMark(answer))]

            new_errors = solution.getErrorReport(answer)

            for question_name, question in new_errors.items():
                for option_name, is_wrong in question.items():
                    if question_name not in error_report.keys():
                        error_report[question_name] = {}
                    if option_name not in error_report[question_name].keys():
                        error_report[question_name][option_name] = 0
                    error_report[question_name][option_name] += is_wrong

    print_results(results, marks_path=MARKS_PATH)
    print('\n\n')
    print_error_report(error_report, n, error_report_path=ERROR_REPORT_PATH)


if __name__ == '__main__':
    main()
