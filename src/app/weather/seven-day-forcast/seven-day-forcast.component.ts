import {Component, Input, OnInit} from '@angular/core';
import {DarkSkyApiResponse} from '../../core/models/dark-sky-api-response';

@Component({
  selector: 'seven-day-forcast',
  templateUrl: './seven-day-forcast.component.html',
  styleUrls: ['./seven-day-forcast.component.scss']
})
export class SevenDayForcastComponent implements OnInit {

  @Input() weather: DarkSkyApiResponse;

  constructor() { }

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

  debug(value) {
    return value.toString();
  }
}
