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
  
  DashboardNav(){
    this.navClicks++;
    if(this.navClicks == 5){
      this.router.navigate(['login']);
    }
    else if(this.navClicks == 1){
      setTimeout(() => {  this.navClicks = 0; }, 1000);
    }
    console.log(this.navClicks)
  }

}
