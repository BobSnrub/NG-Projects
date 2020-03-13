import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainComponent } from '../main/main.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  weatherDataArr: any[] = [];
// private mainComp: MainComponent
  constructor(private http: HttpClient, ) { }

  // fetchData(userInput) {
  //   // console.log(userInput);
  //   this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + ',%20us&appid=ce2888cb1a06bd6877fe6ef82434a488').subscribe(
  //     x => {
  //       console.log(x);

  //       if(this.weatherDataArr.find(item => item.id === x.id) === undefined){
  //         this.weatherDataArr.push(x);
  //         // this.mainComp.setItem(this.weatherDataArr);
  //         console.log(x);
  //       }
  //       else{
  //         alert('City has already been saved.');
  //       }
  //     }
  //   );
  // }
}
