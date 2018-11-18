import {WeatherData} from './weather-data';
import {WeatherMinute} from './weather-minute';
import {WeatherHourly} from './weather-hourly';
import {WeatherDaily} from './weather-daily';
import {Alert} from './alert';

export class DarkSkyApiResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: WeatherData;
  minutely: WeatherMinute;
  hourly: WeatherHourly;
  daily: WeatherDaily;
  alerts: Alert[];
}
