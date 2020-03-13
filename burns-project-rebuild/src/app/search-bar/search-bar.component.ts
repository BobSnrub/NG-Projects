import { Component, OnInit, Input } from '@angular/core'
import { ForecastService } from '../services/forecast.service';
import { DataService } from '../services/data.service';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  forecastData: any;

  cityLocation: string;

  constructor(private fService: ForecastService, private dService: DataService, private mainComp: MainComponent) { }

  rootURL: string;

  ngOnInit() {

  }
  // bsvar;
  //https://api.openweathermap.org/data/2.5/  forecast?q= 95220  ,%20us&appid=ce2888cb1a06bd6877fe6ef82434a488
  pressedEnter(input) {
    // this.bsvar = input;
    if (input !== '') {
      // this.dService.fetchData(input.value);
      // this.mainComp.saveData();

      // alert(input.value);

      // let urlBasePt1 = 'https://api.openweathermap.org/data/2.5/';

      // let urlWeatherPt2 = 'weather?q=';
      // let urlForecastPt2 = 'forecast?q=';

      // let urlLocationPt3 = input.value;

      // let urlKeyPt4 = ',%20us&appid=ce2888cb1a06bd6877fe6ef82434a488';

      // let weatherURL = urlBasePt1 + urlWeatherPt2 + urlLocationPt3 + urlKeyPt4;
      // let forecastURL = urlBasePt1 + urlForecastPt2 + urlLocationPt3 + urlKeyPt4;

      // this.sendURL(weatherURL, forecastURL);
      // // this.getData();

      input.value = '';
    }
  }

  // sendURL(weatherURL, forecastURL) {
  //   this.fService.getURLs(weatherURL, forecastURL);
  // };



  // getData() {
  //   this.rootURL = 'https://api.openweathermap.org/data/2.5/forecast?q=95220,%20us&appid=ce2888cb1a06bd6877fe6ef82434a488';
  //   this.fService.httpRequest(this.rootURL).subscribe(
  //     data => {
  //       this.forecastData = data
  //       console.log(this.forecastData);

  //       this.cityLocation = this.forecastData.city.name + ', ' + this.forecastData.city.country;
  //       console.log(this.cityLocation);
  //       // this.bsvar.value = this.location;
  //     });
  // }

  // this.wService.getURL(this.API_URL).subscribe( x => {
  //   this.city = x;
  //   console.log(this.city);
  // });

}
