import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HometestComponent } from './views/hometest/hometest.component';

@NgModule({
  declarations: [
    AppComponent,
    HometestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
