import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../services/forecast.service';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // forecastData: any;
  weatherDataArr = [];
  // forecastDays: any[] = [];

  // cityLocation: string;

  // rootURL: string;

  constructor(private http: HttpClient, private fService: ForecastService, private dService: DataService) {
    // this.fService.fetchData();
  }

  ngOnInit() {
    // this.weatherData = this.dService.weatherDataArr;
    // this.forecastData = this.getData();
    // console.log(this.getData);
  }

  fetchData(userInput) {
    // console.log(userInput);
    let wArr;
    let fArr;
    this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + ',%20us&appid=ce2888cb1a06bd6877fe6ef82434a488').subscribe(
      x => {
        console.log(this.weatherDataArr);
        console.log(this.weatherDataArr.find(item => item.weather.id === x.id))
        console.log(x);

        if(this.weatherDataArr.find(item => item.weather.id === x.id) === undefined){
          // this.weatherDataArr.push(x);
          wArr = x;
          console.log(x);
        }
        else{
          alert('City has already been saved.');
        }
      }
    );
    
    this.http.get<any>('https://api.openweathermap.org/data/2.5/forecast?q=' + userInput + ',%20us&appid=ce2888cb1a06bd6877fe6ef82434a488').subscribe(
      x => {
        console.log(x);
        if(this.weatherDataArr.find(item => item.forecast.id === x.id) === undefined){
          // this.weatherDataArr.push(x);
          fArr = x;
          console.log(x);

          this.weatherDataArr.push(
            {
              weather: wArr,
              forecast: fArr
            }
          );
        }
        else{
          alert('City has already been saved.');
        }
      }
    );

    
    // this.weatherDataArr.push(
    //   {
    //     weather: wArr,
    //     forecast: fArr
    //   }
    // );
    console.log(this.weatherDataArr);

  }

  pressedEnter(input) {
    // this.bsvar = input;
    if (input.value !== '') {
      this.fetchData(input.value);

      input.value = '';
    }
  }
  
  // setItem(myArr){
  //   this.weatherDataArr = myArr;
  // }

  // saveData(){
  //   this.weatherData = this.dService.weatherDataArr;
  // }





  kToF(kInput) {
    // ℉=((K-273.15)*1.8)+32
    return Math.round(((kInput-273.15)*1.8)+32);
  }
}
