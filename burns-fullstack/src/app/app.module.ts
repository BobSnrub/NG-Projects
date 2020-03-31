import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';

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
    AboutParentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
