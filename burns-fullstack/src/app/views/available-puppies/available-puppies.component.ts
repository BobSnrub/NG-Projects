import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Puppypost } from 'src/app/interfaces/puppypost';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-available-puppies',
  templateUrl: './available-puppies.component.html',
  styleUrls: ['./available-puppies.component.scss']
})
export class AvailablePuppiesComponent implements OnInit {

  private googleSheet: Subscription;
  private availablePuppiesURL = 'https://spreadsheets.google.com/feeds/list/1VC0CQeN-PsY00ym5oUVJkqy3tJfkZ7qBEOP5OvjULtc/1/public/full?alt=json';
  private localArr: Puppypost[] = [];
  private listingSub: any;

  private pPost;

  constructor(private http: HttpClient, private dService: DataService) {
    // this.listingSub = this.getGameData();
    this.getGameData();
    // console.log(this.listingSub);
  }

  ngOnInit() {
  }

  getGameData() {

    let puppyObj = this.dService.GetPosts();

    puppyObj.subscribe(x => {
      console.log(x);
      this.pPost
   = x;
      console.log(this.pPost
    [1].id);
    });

    console.log(this.pPost
  );
  }

  createLocalArr(arr: Puppypost[]) {
    this.listingSub = this.getGameData();
    for (let i = 0; i < this.listingSub.length; i++) {
      let stepArr: Puppypost = {
        id: this.listingSub[i].id,
        name: "asdf",
        coat: "asdf",
        eyes: "asdf",
        sex: "asdf",
        dob: "asdf",
        price: "asdf",
        desc: "asdf",
        imgUrl: "asdf",
      };
    }
  }
}
