import { Component, OnInit } from '@angular/core';
import { on } from 'cluster';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  flip = false;

  constructor() { }

  ngOnInit() {
  }

  clickEvent(e) {
    console.log(e);
    // alert('You clicked me, prepare to die! IN')
  }

  hoverExit(e) {
    console.log(e);
    // alert('You clicked me, prepare to die! OUT')
  }

  switch(v) {
    console.log(v);
    this.flip = this.flip ? !this.flip : !!!this.flip;
    
    v.innerText = this.flip ? 'Off' : 'On';
    
    // this.flip = !this.flip;
    
    // if(this.flip){
    //   v.innerText = 'Off';
    // } else{
    //   v.innerText = 'On';
    // }

    // if (this.flip) {
    //   this.flip = false;
    // } else {
    //   this.flip = true;
    // }
  }


}
