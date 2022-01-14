import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyfilter',
  templateUrl: './keyfilter.component.html',
  styleUrls: ['./keyfilter.component.css'],
  animations: [
    trigger('errorState', [
        state('hidden', style({
            opacity: 0
        })),
        state('visible', style({
            opacity: 1
        })),
        transition('visible => hidden', animate('400ms ease-in')),
        transition('hidden => visible', animate('400ms ease-out'))
    ])
]
})
export class KeyfilterComponent{

  blockSpecial: RegExp = /^[^<>*!]+$/ 
    
  blockSpace: RegExp = /[^\s]/; 
  
  ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/; 
  
  cc: string = "";
}
