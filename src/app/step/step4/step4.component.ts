import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TicketService } from '../step1/ticketService';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  ticketInformation: any;
    
  constructor(public ticketService: TicketService, private router: Router, private messageService: MessageService) { }

  ngOnInit() { 
      this.ticketInformation = this.ticketService.ticketInformation;
      console.log('------ to no step 4 - informacoesw no sevice -> ', this.ticketService.ticketInformation);
      
  }

  complete() {
      this.ticketService.complete();
  }

  prevPage() {
      this.router.navigate(['step3']);
  }

}
