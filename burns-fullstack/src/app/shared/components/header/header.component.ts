import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  buttonBool = true;
  navBool = false;

  constructor() {
    // console.log(window.screen);

    // if(window.screen.width < 800){
    //   this.buttonBool = true;
    //   this.navBool = false;
    // }
  }

  ngOnInit() {
    if(window.screen.width < 995){
      this.buttonBool = true;
      this.navBool = false;
    }
    else{
      this.buttonBool = false;
      this.navBool = true;
    }
    // this.navClicks = 0;
  }

  navBtnClick(){
    if(!this.navBool){
      this.navBool = true;
    }
    else{
      this.navBool = false;
    }
  }

}
