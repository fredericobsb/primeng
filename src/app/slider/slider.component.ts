import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

//import {SliderModule} from 'primeng/slider';
export class SliderComponent{

  val1!: number;

  val2: number = 50;

  val3!: number;

  val4!: number;

  rangeValues: number[] = [20,80];

}
