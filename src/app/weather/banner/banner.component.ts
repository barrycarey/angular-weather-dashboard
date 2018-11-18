import {Component, Input, OnInit} from '@angular/core';
import {DarkSkyApiResponse} from '../../core/models/dark-sky-api-response';


@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() weather: DarkSkyApiResponse;

  constructor() { }

  ngOnInit() {
  }

}
