import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-tooglebutton',
  templateUrl: './tooglebutton.component.html',
  styleUrls: ['./tooglebutton.component.css']
})
//deu erro no html, mas funciona! verificar!
export class TooglebuttonComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
      this.primengConfig.ripple = true;
    }
    
    checked1: boolean = false;

    checked2: boolean = true;

}
