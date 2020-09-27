import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private route: Router, private jwtHelper: JwtHelperService, private lService: LoginService) { }

  canActivate() {
    const token = sessionStorage.getItem("jwtToken");
    // if(this.lService.getLogin()){
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      this.route.navigate(["login"]);
      sessionStorage.removeItem("jwtToken")
      return false;
    }
  }
}
