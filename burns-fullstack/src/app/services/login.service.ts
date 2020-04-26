import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public apiURL = environment.api;
  private loginURL = this.apiURL + 'api/auth/login';
  private getTracksURL = this.apiURL + 'track';
  private token;

  // By setting up httpOptions here we don't have to inline it
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor(private http: HttpClient,
    private router: Router) { }

  // Login Function to recieve username and password object
  Login(credentials: any) {
    console.log(this.loginURL);
    // Post Request
    // this.http.post( url to post to , information to be passed)

    this.http.post(this.loginURL, credentials).subscribe(data => {
      this.token = data;
      
      // Grabbing the value inside of the object
      this.token = this.token.token;

      // localStorage.setItem("loginToken", this.token);
      // console.log(localStorage.getItem("loginToken"));
      // console.log(this.token);

      this.router.navigate(['dashboard']);
    });

  }
  // Track url is http://localhost5000/streaming
  GetTracks() {
    const tokenInfo = 'bearer ' + this.token;
    console.log(this.token);
    // We use the set here to create an instance of httpOptions with the value we need for the header.
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'bearer ' + this.token);
    console.log(this.httpOptions.headers);
    this.http.get(this.getTracksURL, this.httpOptions).subscribe(data => {
      console.log(data);
    });
  }
}
