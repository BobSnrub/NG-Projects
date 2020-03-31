import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Puppypost } from 'src/app/interfaces/puppypost';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private googleSheet: Subscription;
  // private availablePuppiesURL = 'https://spreadsheets.google.com/feeds/list/1VC0CQeN-PsY00ym5oUVJkqy3tJfkZ7qBEOP5OvjULtc/1/public/full?alt=json';
  // public localArr: Puppypost[] = [];


  constructor(private http: HttpClient) { }

  // async getGameData() {
  //   this.googleSheet = this.http.get<any>(this.availablePuppiesURL).subscribe(
  //     xVar => {
  //       for (let i = 0; i < xVar.feed.entry.length; i++) {
  //         let stepArr: Puppypost = {
  //           id: xVar.feed.entry[i].gsx$id.$t as number,
  //           name: xVar.feed.entry[i].gsx$name.$t,
  //           coat: xVar.feed.entry[i].gsx$coat.$t,
  //           eyes: xVar.feed.entry[i].gsx$eyes.$t,
  //           sex: xVar.feed.entry[i].gsx$sex.$t,
  //           price: xVar.feed.entry[i].gsx$price.$t as number,
  //           desc: xVar.feed.entry[i].gsx$desc.$t,
  //         };
  //         this.localArr.push(stepArr);
  //       }
  //       console.log(this.localArr);
  //       return this.localArr;
  //     }
  //   );
  // }
}
