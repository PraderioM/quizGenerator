from typing import Dict, Tuple, List, Optional
import json
from glob import glob
from os.path import join

from models import Quiz


SOLUTION_PATH = './solution.json'
ANSWERS_PATH = './quiz-answers'
MARKS_PATH = './marks'
ERROR_REPORT_PATH = './error_report'
FEED_BACK_PATH = './feed_back'


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
    msg = 'Question\terror%'
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


def print_feed_back(feed_back: Dict[str, Dict[str, List[Tuple[str, str]]]],
                    feed_back_path: Optional[str] = None) -> None:
    if feed_back_path is None:
        return None

    # Here the things to write on the error report will be stored.
    lines: List[str] = []

    for workshop, error_dict in feed_back.items():
        msg = f'\n\nWORKSHOP: {workshop}'
        lines.append(msg)
        for student, errors in error_dict.items():
            if len(errors) == 0:
                error_str = 'No errors perfect submission.'
            else:
                error_str = ', '.join([' '.join([question, option]) for question, option in errors])
            msg = f'\t{student}: {error_str}'
            lines.append(msg)

    with open(feed_back_path, 'w') as out_file:
        out_file.write('\n'.join(lines))
    print(f'Feed back for each student was stored in "{feed_back_path}".')


def main():
    with open(SOLUTION_PATH, 'r') as solution_file:
        json_data = json.load(solution_file)
        solution = Quiz.fromJSON(json_data=json_data)

    error_report: Dict[str, int] = {}
    feed_back: Dict[str, Dict[str, List[Tuple[str, str]]]] = {}
    results: Dict[str, List[Tuple[str, str, float]]] = {}
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
                # This is used to store the wrong answers of each individual student.
                student = answer.surname + ', ' + answer.name
                if answer.workshop not in feed_back.keys():
                    feed_back[answer.workshop] = {}
                if student not in feed_back[answer.workshop].keys():
                    feed_back[answer.workshop][student] = []

                # This is done to store statistics for whole class. I know it can be done using the data above,
                # but it's not necessary, and it saves almost no computation time.
                for option_name, is_wrong in question.items():
                    if question_name not in error_report.keys():
                        error_report[question_name] = {}
                    if option_name not in error_report[question_name].keys():
                        error_report[question_name][option_name] = 0
                    error_report[question_name][option_name] += is_wrong
                    if is_wrong == 1:
                        feed_back[answer.workshop][student].append((question_name, option_name))

    print_results(results, marks_path=MARKS_PATH)
    print('\n\n')
    print_error_report(error_report, n, error_report_path=ERROR_REPORT_PATH)
    print('\n\n')
    print_feed_back(feed_back, feed_back_path=FEED_BACK_PATH)


if __name__ == '__main__':
    main()
