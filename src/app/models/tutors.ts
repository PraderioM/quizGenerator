export class Tutor {
  constructor(public name: string, public surname: string, public email: string, public groups: string[]) {  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }

  getEmail() {
    return this.email.replaceAll('@', ' at ').replaceAll('.', ' dot ')
  }

}

export const TUTORS = [
  new Tutor('Callum', 'Berry', 'c.berry6 at lancaster.ac.uk', ['W01/03', 'W01/04']),
  new Tutor('Lauren', 'Hindmarch', 'l.hindmarch at lancaster.ac.uk', ['W01/08', 'W01/10']),
  new Tutor('Marco', 'Praderio', 'm.praderio at lancaster.ac.uk', ['W01/02', 'W01/06', 'W01/07']),
  new Tutor('Jakub', 'Waniek', 'j.waniek1 at lancaster.ac.uk', ['W01/09'])
];
