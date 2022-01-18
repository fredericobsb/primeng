import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../step1/ticketService';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  constructor(public ticketService: TicketService, private router: Router) { }

    classes!: any[];

    vagons!: any[];
    
    seats!: any[];

    seatInformation: any;

  ngOnInit(): void {
    this.seatInformation = this.ticketService.ticketInformation.seatInformation;
    console.log('-----objeto no service => ', this.ticketService.ticketInformation);
    
    this.classes = [
        {name: 'First Class', code: 'A', factor: 1},
        {name: 'Second Class', code: 'B', factor: 2},
        {name: 'Third Class', code: 'C', factor: 3}
    ];   
  }

  setVagons(event:any) {
    if (this.seatInformation.class && event.value) {
        this.vagons = [];
        this.seats = [];
        for (let i = 1; i < 3 * event.value.factor; i++) {
            this.vagons.push({wagon: i + event.value.code, type: event.value.name, factor: event.value.factor});
        }
    }
}

  setSeats(event:any) {
      if (this.seatInformation.wagon && event.value) {
          this.seats = [];
          for (let i = 1; i < 10 * event.value.factor; i++) {
              this.seats.push({seat: i, type: event.value.type});
          }
      }
  }

  nextPage() {
      this.ticketService.ticketInformation.seatInformation = this.seatInformation;
      this.router.navigate(['step3']);
  }

  prevPage() {
      this.router.navigate(['step']);
  }

}
