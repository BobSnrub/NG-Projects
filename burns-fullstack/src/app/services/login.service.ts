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
  public token;

  // By setting up httpOptions here we don't have to inline it
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: 'my-auth-token'
  //   })
  // };
  
  public isLoggedIn = true;

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

      localStorage.setItem("jwtToken", this.token);
      console.log(localStorage.getItem("jwtToken"));
      // console.log(this.token);

      this.router.navigate(['dashboard']);
    });
  }
  
  setLogin(loginValue){
    this.isLoggedIn = loginValue;
  }

  getLogin(){
    return this.isLoggedIn;
  }
}
