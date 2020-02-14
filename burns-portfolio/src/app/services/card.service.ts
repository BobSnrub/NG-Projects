import { Injectable } from '@angular/core';
import { ProjectData } from '../interfaces/project-data';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cardData: ProjectData[] = [
    // cardImg: string;
    // cardTitle: string;
    // cardDesc: string;

    // /assets/images/logos/cSharp-logo.png
    // /assets/images/logos/html-logo.png
    // /assets/images/logos/css-logo.png
    // /assets/images/logos/bootstrap-logo.png
    // /assets/images/logos/javascript-logo.png
    // /assets/images/logos/typescript-logo.png
    // /assets/images/logos/angular-logo.png
    // /assets/images/logos/angular-material-logo.png
    // /assets/images/logos/codestack-logo.png
    // /assets/images/logos/prime-ng-logo.png
    // /assets/images/logos/ng-bootstrap-logo.png


    // '/assets/images/logos/cSharp-logo.png',
    // '/assets/images/logos/html-logo.png',
    // '/assets/images/logos/css-logo.png',
    // '/assets/images/logos/bootstrap-logo.png',
    // '/assets/images/logos/javascript-logo.png',
    // '/assets/images/logos/typescript-logo.png',
    // '/assets/images/logos/angular-logo.png',
    // '/assets/images/logos/angular-material-logo.jpg',
    // '/assets/images/logos/codestack-logo.png',
    // '/assets/images/logos/prime-ng-logo.png',
    // '/assets/images/logos/ng-bootstrap-logo.png',



    {
      cardImg: '/assets/images/img-ToDoApp.png',
      cardTitle: 'Lab2 ToDoApp',
      cardDesc: 'Lab2 ToDoApp',
      projectURL: 'https://rburns.azurewebsites.net/Projects/ToDoApp/',
      linkText: 'View in New Tab',
      iconUrls: [
        '/assets/images/logos/html-logo.png',
        '/assets/images/logos/css-logo.png',
        '/assets/images/logos/bootstrap-logo.png',
        '/assets/images/logos/javascript-logo.png',
      ]
    },
    {
      cardImg: '/assets/images/img-WeatherApplication.png',
      cardTitle: 'Project5 Weather Application',
      cardDesc: 'Project5 Weather Application',
      projectURL: 'https://rburns.azurewebsites.net/Projects/WeatherApplication/',
      linkText: 'View in New Tab',
      iconUrls: [
        '/assets/images/logos/html-logo.png',
        '/assets/images/logos/css-logo.png',
        '/assets/images/logos/bootstrap-logo.png',
        '/assets/images/logos/javascript-logo.png',
      ]
    },
    {
      cardImg: '/assets/images/img-hamsterHotel.png',
      cardTitle: 'Project1 HamsterHotel',
      cardDesc: 'Project1 HamsterHotel',
      projectURL: 'https://rburns.azurewebsites.net/Projects/HamsterHotel/',
      linkText: 'View in New Tab',
      iconUrls: [
        '/assets/images/logos/html-logo.png',
        '/assets/images/logos/css-logo.png',
        '/assets/images/logos/bootstrap-logo.png',
      ]
    },
    {
      cardImg: '/assets/images/img-PuppyRestaurant.png',
      cardTitle: 'Project2 Puppy Restaurant',
      cardDesc: 'Project2 Puppy Restaurant',
      projectURL: 'https://rburns.azurewebsites.net/Projects/PuppyRestaurant/',
      linkText: 'View in New Tab',
      iconUrls: [
        '/assets/images/logos/html-logo.png',
        '/assets/images/logos/css-logo.png',
        '/assets/images/logos/bootstrap-logo.png',
      ]
    },
    {
      cardImg: '/assets/images/img-TriviaGame.png',
      cardTitle: 'Project3 TriviaGame',
      cardDesc: 'Project3 TriviaGame',
      projectURL: 'https://rburns.azurewebsites.net/Projects/TriviaGame/',
      linkText: 'View in New Tab',
      iconUrls: [
        '/assets/images/logos/html-logo.png',
        '/assets/images/logos/css-logo.png',
        '/assets/images/logos/bootstrap-logo.png',
        '/assets/images/logos/javascript-logo.png',
      ]
    },
    {
      cardImg: '/assets/images/img-BusinessRedevelopment.png',
      cardTitle: 'Project4 Business Redevelopment',
      cardDesc: 'Project4 Business Redevelopment',
      projectURL: 'https://rburns.azurewebsites.net/Projects/BusinessRedevelopment/',
      linkText: 'View in New Tab',
      iconUrls: [
        '/assets/images/logos/html-logo.png',
        '/assets/images/logos/css-logo.png',
        '/assets/images/logos/bootstrap-logo.png',
      ]
    },
    {
      cardImg: '/assets/images/img-WebStore.png',
      cardTitle: 'WebStore Project',
      cardDesc: 'Quadcopter Parts Webstore',
      projectURL: 'https://rburns.azurewebsites.net/WebStore/',
      linkText: 'View in New Tab',
      iconUrls: [
        '/assets/images/logos/html-logo.png',
        '/assets/images/logos/css-logo.png',
        '/assets/images/logos/typescript-logo.png',
        '/assets/images/logos/angular-logo.png',
        '/assets/images/logos/prime-ng-logo.png',
        '/assets/images/logos/ng-bootstrap-logo.png',
      ]
    },
    {
      cardImg: '/assets/images/img-MultiToolApp.png',
      cardTitle: 'Windows Forms Multi Tool App',
      cardDesc: 'Windows Forms Multi Tool App',
      projectURL: 'https://rburns.azurewebsites.net/downloadLinks/Burns-MultiToolApp.zip',
      linkText: 'Download .zip File',
      iconUrls: [
        '/assets/images/logos/cSharp-logo.png',
      ]
    },
  ]

  constructor() { }


  getProjects(): ProjectData[] {
    return this.cardData;
  }
}
