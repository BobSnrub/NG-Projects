import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // trash = [
  //   {title:'My Project 1', desc: 'Trash', nFO: 'something else', img: 'assets/images/random-angular-background.jpg', hLink: 'https://getbootstrap.com/docs/4.4/components/card/'},
  //   {title:'My Project 2', desc: 'Trash 2', nFO: 'something else 2', img: 'assets/images/random-angular-image.jpg', hLink: 'https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup'},
  //   {title:'My Project 3', desc: 'Trash 3', nFO: 'something else 3', img: 'assets/images/random-angular-image2.jpg', hLink: 'https://github.com/Burns316/NG-Projects'},

  // ];
  trash: Student[] = [
    {
      fName: 'Jon',
      lName: 'Stewart',
      sName: 'JonStewart',
      pNumber: '44444444',
    },
    {
      fName: 'Joe',
      lName: 'Dontknow',
      sName: 'mofo',
      pNumber: '8888888',
    },
    {
      fName: 'Rob',
      lName: 'Burns',
      sName: 'Robert Burns',
      pNumber: '3573454684',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
