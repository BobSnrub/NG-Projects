import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Puppypost } from 'src/app/interfaces/puppypost';
import { environment } from 'src/environments/environment';
import { async } from '@angular/core/testing';
import { LoginService } from './login.service';
import { ConditionalExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private googleSheet: Subscription;
  // private availablePuppiesURL = 'https://spreadsheets.google.com/feeds/list/1VC0CQeN-PsY00ym5oUVJkqy3tJfkZ7qBEOP5OvjULtc/1/public/full?alt=json';
  // public localArr: Puppypost[] = [];
  public jwtToken;

  // By setting up httpOptions here we don't have to inline it
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient, private lService: LoginService) { }

  // private tileDataArray = [];

  public apiUrl = environment.api;

  GetPosts() {
    // const tokenHeader = 'bearer ' + this.lService.token;
    // console.log(this.lService.token);
    // this.httpOptions.headers = this.httpOptions.headers.set('Authorization', tokenHeader);
    // console.log(this.httpOptions.headers);

    // return this.http.get(this.apiUrl + 'puppypost/', this.httpOptions);

    return this.http.get(this.apiUrl + 'puppypost/');
  }


  GetPostById(id) {
    return this.http.get(this.apiUrl + 'puppypost/' + id);
  }

  CreatePost(request: Puppypost) {
    this.GetJwtToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'bearer ' + this.jwtToken);
    console.log(this.httpOptions.headers);

    // this.http.get(this.apiUrl + 'puppypost/' + id, this.httpOptions);
    // this.http.post(this.apiUrl + 'puppypost/', request, this.httpOptions).subscribe(x => console.log(x));
    return this.http.post(this.apiUrl + 'puppypost/', request, this.httpOptions).subscribe(x => console.log(x));


    // console.log(request);

    // console.log(this.http.post(this.apiUrl + 'puppypost/', request).subscribe(x => {
    //   console.log(x);
    // }));

    // return this.http.post(this.apiUrl + 'puppypost/', request);
  }

  UpdatePost(request) {
    return this.http.post(this.apiUrl + 'puppypost/', request);
  }

  DeletePostById(id) {
    return this.http.delete(this.apiUrl + 'puppypost/' + id);
  }

  GetJwtToken(){
    this.jwtToken = localStorage.getItem("jwtToken");
    console.log(this.jwtToken);
    console.log(localStorage.getItem("jwtToken"));
  }

}
