import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardData: Student;

  studentData: Student[] = [
    {
      fN: 'Robert',
      lN: 'Burns',
      sN: 'Robert Burns',
      nN: 'Rob',
      hob: 'Airsoft'
    },
    {
      fN: 'Joseangel',
      lN: 'Pantoja',
      sN: 'Angel',
      nN: 'Angel',
      hob: 'Hiking'
    },
    {
      fN: 'Deon',
      lN: 'Simmons Jr.',
      sN: 'Deon',
      nN: 'N/A',
      hob: 'Reading Comics'
    },
    {
      fN: 'Trever',
      lN: 'Edwards',
      nN: 'Ted',
      sN: 'Trever Edwards',
      hob: 'Respecting Women'
    },
    {
      fN: 'Esteban',
      lN: 'Zaragoza',
      sN: 'Esteban Z',
      nN: 'uB Darkness',
      hob: 'chillin'
    },
    {
      fN: 'Nimish',
      lN: 'Lal',
      sN: 'Nimish Lal',
      nN: 'Nimish',
      hob: 'playing video games'
    },
    {
      fN: 'Lourn',
      lN: 'Selga',
      sN: 'Lourn?',
      nN: 'Lrrrn',
      hob: 'Plastic Model Building'
    },
    {
      fN: 'Jon',
      lN: 'Stewart',
      sN: 'Jon Stewart',
      nN: 'Jon-less H',
      hob: 'Liking characters to death'
    },
    {
      fN: 'Johnny',
      lN: 'Uribe',
      sN: 'JohnnyU',
      nN: 'Johnny',
      hob: 'Long walks on the beach'
    },
    {
      fN: 'Abraham',
      lN: 'Lopez',
      sN: 'something',
      nN: 'Abe',
      hob: 'Reading Manga'
    },
    {
      fN: "Zach",
      lN: "Davis",
      sN: "zdavis",
      nN: "Wynan",
      hob: "games"
    },
    {
      fN: 'David',
      lN: 'Abdallah',
      sN: 'DaveDaAverageDude',
      nN: 'Dave',
      hob: 'Work'
    },
    {
      fN: 'Carter',
      lN: 'Galvez',
      sN: 'carter209cg',
      nN: 'son of Bonacci',
      hob: 'Messing up logic and code'
    },
    {
      fN: 'Francisco',
      lN: 'Chavez',
      nN: 'Frankie',
      sN: 'Francisco Chavez',
      hob: 'reading'
    }
  ];
  constructor() { }

  getStudent(): Student[] {
    return this.studentData;
  }

  setCardData(person: Student) {
    // Save the student data for card
    this.cardData = person;
  }

  getCardData(): Student {
    // Retrieve student data for card
    return this.cardData;
  }
}
