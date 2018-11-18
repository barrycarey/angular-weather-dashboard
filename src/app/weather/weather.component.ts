
import {TimerObservable} from "rxjs-compat/observable/TimerObservable";

import 'rxjs/add/operator/takeWhile';
import {Component, OnInit} from '@angular/core';
import {DarkSkyApiResponse} from '../core/models/dark-sky-api-response';
import {DarkSkyService} from '../core/services/dark-sky-service';
import {WeatherData} from '../core/models/weather-data';
import {UserIpService} from '../core/services/user-ip-service';
import {UserData} from '../core/models/user-data';


@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private alive: boolean;
  weather: DarkSkyApiResponse;
  hourlyTemp: number[];
  userData: UserData;

  constructor(
    private weatherApi: DarkSkyService,
    private userService: UserIpService
  ) {
    this.alive = true;
    this.hourlyTemp = [];
  }

  ngOnInit() {

    this.userService.getUserIpAddress()
      .subscribe(userData => {
        console.log(`Loaded user data: ${this.userData}`);
        this.userData = userData;
        this.loadWeatherdata(this.userData);
      });
  }

  loadWeatherdata(userData: UserData) {
    TimerObservable.create(0, 600000)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.weatherApi.getWeatherData(userData)
          .subscribe(weather => {
            this.weather = weather;
            console.log(weather);
          });
      });
  }

  setHourlyTempData(hourly: WeatherData[]) {
    for (let hour in hourly) {
      //console.log(`Adding temp ${hour.temperature}`);
      //this.hourlyTemp.push(hour.temperature);
    }
  }



}
