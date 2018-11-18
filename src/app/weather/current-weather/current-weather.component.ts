import {Component, Input, OnInit} from '@angular/core';
import {DarkSkyApiResponse} from '../../core/models/dark-sky-api-response';
import {UserData} from '../../core/models/user-data';


@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() weather: DarkSkyApiResponse;
  @Input() userData: UserData;
  public now: Date = new Date();

  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 60000)
  }

  ngOnInit() {
  }

  getIconClass(icon: string) {
    console.log(`Getting icon ${icon}`);
    if (icon === 'snow') {
      return 'wi wi-day-snow';
    } else if (icon === 'partly-cloudy-day') {
      return 'wi wi-day-cloudy';
    } else if (icon === 'partly-cloudy-night') {
      return 'wi wi-day-cloudy';
    } else if (icon === 'clear-day') {
      return 'wi wi-day-sunny';
    } else if (icon === 'cloudy') {
      return 'wi wi-day-cloudy';
    } else if (icon === 'fog') {
      return 'wi wi-fog';
    }
  }

}
