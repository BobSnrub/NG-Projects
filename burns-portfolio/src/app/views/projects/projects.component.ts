import { Component, OnInit } from '@angular/core';
import { ProjectData } from 'src/app/interfaces/project-data';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectData[] = [];

  constructor(private projectsData: CardService) { }

  ngOnInit() {
    this.projects = this.projectsData.getProjects();
    console.log(this.projects)
  }



}
