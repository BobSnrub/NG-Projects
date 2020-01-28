import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Student } from '../interfaces/student';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() selectedStudent = new EventEmitter();
  students: Student[] = [];
  constructor(private dataService: DataService) {
    this.students = dataService.getStudent();
   }

  ngOnInit() {
  }

  studentClicked(person: Student){
    // alert(person.fN);
    //Set value
    // this.dataService.setCardData(person);
    this.selectedStudent.emit(person);
  }

}
