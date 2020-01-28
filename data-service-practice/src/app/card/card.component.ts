import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../interfaces/student';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cData: Student;
  constructor() {
  }
  
  ngOnInit() {
  }

}
