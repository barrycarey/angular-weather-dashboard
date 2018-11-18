import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SevenDayForcastComponent } from './seven-day-forcast/seven-day-forcast.component';
import { BannerComponent } from './banner/banner.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import {WeatherComponent} from './weather.component';



const components = [
  SevenDayForcastComponent,
  BannerComponent,
  CurrentWeatherComponent,

];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ...components
  ],
  declarations: [
    ...components,

  ]
})
export class WeatherModule { }
