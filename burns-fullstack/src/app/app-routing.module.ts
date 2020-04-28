import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { AvailablePuppiesComponent } from './views/available-puppies/available-puppies.component';
import { ReserveFutureComponent } from './views/reserve-future/reserve-future.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { ContactFormComponent } from './views/contact-form/contact-form.component';
import { ParentdogsComponent } from './views/parentdogs/parentdogs.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuardService } from './services/guards/auth-guard.service';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "aboutUs", component: AboutUsComponent},
  {path: "availablePuppies", component: AvailablePuppiesComponent},
  {path: "contact", component: ContactFormComponent},
  {path: "parents", component: ParentdogsComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "login", component: LoginComponent},
  {path: "reserveFuture", component: ReserveFutureComponent},
  {path: "dashboard", component: DashboardComponent, canActivate:[AuthGuardService] },
  {path: "", component: HomeComponent},
  {path: "**", redirectTo: "/home"},
  // {path: "dashboard", redirectTo: "/createPost"},
  // {path: "/createPost", component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
