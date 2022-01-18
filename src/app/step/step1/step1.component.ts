import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from './ticketService';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  personalInformation: any;

  submitted: boolean = false;

  constructor(public ticketService: TicketService, private router: Router) { }


  ngOnInit(): void {
    this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
  }

  nextPage() {
    if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
        this.ticketService.ticketInformation.personalInformation = this.personalInformation;
        this.router.navigate(['step2']);
    }

    this.submitted = true;
}

}
