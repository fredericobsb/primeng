import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css']
})
export class InputtextComponent {

  disabled: boolean = true;

  value1!: string;

  value2!: string;

  value3!: string;

  value4!: string;

  value5: string = 'Disabled';

}
