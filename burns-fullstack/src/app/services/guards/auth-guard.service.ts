import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { DataService } from '../data.service';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private lService: LoginService) { }

  canActivate(){
    if(this.lService.getLogin()){
      return true;
    }
    else{
      return false;
    }
  }
}
