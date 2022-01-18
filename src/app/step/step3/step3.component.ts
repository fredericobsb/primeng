import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../step1/ticketService';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  paymentInformation: any;

    constructor(public ticketService: TicketService, private router: Router) { }

    ngOnInit() { 
        this.paymentInformation = this.ticketService.ticketInformation.paymentInformation;
        console.log('---------- objeto no service - to no step 3=> ', this.ticketService.ticketInformation);
        
    }

    nextPage() {
        this.ticketService.ticketInformation.paymentInformation = this.paymentInformation;
        this.router.navigate(['step4']);
    }

    prevPage() {
        this.router.navigate(['step2']);
    }
}
