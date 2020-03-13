import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainForecast } from '../interfaces/main-forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  // public weatherURL: string;
  // public forecastURL: string;

  constructor() { }
}
