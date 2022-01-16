import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem, MessageService} from 'primeng/api';
import { TicketService } from './ticketservice';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepComponent implements OnInit {

    personalInformation: any;

    submitted: boolean = false;
    
    constructor(public ticketService: TicketService, private router: Router) { }

    ngOnInit(): void {
        this.personalInformation = this.ticketService.getTicketInformation();
    }

    nextPage() {
        if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
            this.ticketService.personalInformation = this.personalInformation;
            this.router.navigate(['steps/seat']);

            return;
        }

        this.submitted = true;
    }

}
