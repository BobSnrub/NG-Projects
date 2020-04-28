import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import { JwtModule } from "@auth0/angular-jwt";

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { AvailablePuppiesComponent } from './views/available-puppies/available-puppies.component';
import { ReserveFutureComponent } from './views/reserve-future/reserve-future.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AboutParentsComponent } from './views/about-parents/about-parents.component';
import { ContactFormComponent } from './views/contact-form/contact-form.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { ParentdogsComponent } from './views/parentdogs/parentdogs.component';
import { LoginComponent } from './views/login/login.component';

export function tokenGetter() {
  return sessionStorage.getItem("jwtToken");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    AvailablePuppiesComponent,
    ReserveFutureComponent,
    CheckoutComponent,
    DashboardComponent,
    AboutParentsComponent,
    ContactFormComponent,
    GalleryComponent,
    ParentdogsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    FileUploadModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: ["example.com/examplebadroute/"]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
