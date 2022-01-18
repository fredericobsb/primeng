import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';


@Injectable()
export class TicketService {

    objetoStepCompleto!: any;

    ticketInformation = {
        personalInformation: {
            firstname: '',
            lastname: '',
            age: null
        },
        seatInformation: {
            class: null,
            wagon: null,
            seat: null
        },
        paymentInformation: {
            cardholderName:'',
            cardholderNumber:'',
            date:'',
            cvv:'',
            remember:false
        }
    };

    constructor(private messageService: MessageService){
        
    }
    private paymentComplete = new Subject<any>();
    
    paymentComplete$ = this.paymentComplete.asObservable();

    getTicketInformation() {
        return this.ticketInformation;
    }

    setTicketInformation(ticketInformation:any) {
        this.ticketInformation = ticketInformation;
    }

    complete() {
        this.paymentComplete.next(this.ticketInformation.personalInformation);
        this.messageService.add({severity: 'info', summary: 'INFO SENT TO BACKEND API!', detail: this.ticketInformation.personalInformation.firstname + ' ' + this.ticketInformation.personalInformation.lastname});
    }

    popularObjetoNoService(informacoesDoObjeto: any){
        this.ticketInformation.personalInformation.firstname = informacoesDoObjeto.firstname;
        this.ticketInformation.personalInformation.lastname = informacoesDoObjeto.lastname;
        this.ticketInformation.personalInformation.age = informacoesDoObjeto.age;
        console.log('-------objeto populado no service => ', this.ticketInformation);
        
    }
}