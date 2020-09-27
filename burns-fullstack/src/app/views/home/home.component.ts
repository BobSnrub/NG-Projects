import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private pPost;
  private navClicks = 0;

  constructor(private dService: DataService, private router: Router) { }


  ngOnInit() {
    this.getListings();
  }

  getListings() {
    let puppyObj = this.dService.GetPosts();

    puppyObj.subscribe(x => {
      // console.log(x);
      this.pPost = x;
      // console.log(this.pPost[1].id);
    });

    // console.log(this.pPost);
  }
  
  
  //  this function is a 5 click shortcut to the login page.  
  //  Click on the home page hero image where it says "Mokelumne River" 5 times within 1 second
  DashboardNav(){
    this.navClicks++;
    if(this.navClicks == 5){
      this.router.navigate(['dashboard']);
    }
    else if(this.navClicks == 1){
      setTimeout(() => {  this.navClicks = 0; }, 1000);
    }
    // console.log(this.navClicks)
  }

}
