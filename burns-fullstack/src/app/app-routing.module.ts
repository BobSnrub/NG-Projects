import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { AvailablePuppiesComponent } from './views/available-puppies/available-puppies.component';
import { ReserveFutureComponent } from './views/reserve-future/reserve-future.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "aboutUs", component: AboutUsComponent},
  {path: "availablePuppies", component: AvailablePuppiesComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "reserveFuture", component: ReserveFutureComponent},
  // {path: "dashboard", redirectTo: "dashboard/createPost"},
  // {path: "dashboard/createPost", component: DashboardComponent},
  {path: "dashboard", redirectTo: "/createPost"},
  {path: "/createPost", component: DashboardComponent},
  {path: "**", redirectTo: "/home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
