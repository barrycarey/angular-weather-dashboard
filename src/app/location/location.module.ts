import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';

@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LocationComponent
  ]
})
export class LocationModule { }
