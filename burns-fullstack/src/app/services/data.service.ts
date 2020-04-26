import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Puppypost } from 'src/app/interfaces/puppypost';
import { environment } from 'src/environments/environment';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private googleSheet: Subscription;
  // private availablePuppiesURL = 'https://spreadsheets.google.com/feeds/list/1VC0CQeN-PsY00ym5oUVJkqy3tJfkZ7qBEOP5OvjULtc/1/public/full?alt=json';
  // public localArr: Puppypost[] = [];


  constructor(private http: HttpClient) { }

  // private tileDataArray = [];

  public apiUrl = environment.api;

  GetPosts() {
    return this.http.get(this.apiUrl + 'puppypost');
  }

  GetPostById(id) {
    return this.http.get(this.apiUrl + 'puppypost/' + id);
  }

  CreatePost(request: Puppypost) {
    console.log(request);

    console.log(this.http.post(this.apiUrl + 'puppypost/', request).subscribe(x => {
      console.log(x);
    }));

    return this.http.post(this.apiUrl + 'puppypost/', request);
  }

  UpdatePost(request) {
    return this.http.post(this.apiUrl + 'puppypost/', request);
  }

  DeletePostById(id) {
    return this.http.delete(this.apiUrl + 'puppypost/' + id);
  }

}
