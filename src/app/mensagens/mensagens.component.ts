import { Component, OnInit } from '@angular/core';
import { Message, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  msgs1!: Message[];
    
  msgs2!: Message[];

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.msgs1 = [
      {severity:'success', summary:'Success', detail:'Message Content'},
      {severity:'info', summary:'Info', detail:'Message Content'},
      {severity:'warn', summary:'Warning', detail:'Message Content'},
      {severity:'error', summary:'Error', detail:'Message Content'}
    ];
    this.primengConfig.ripple = true;
  }

  addMessages() {
    this.msgs2 = [
        {severity:'success', summary:'Success', detail:'Message Content'},
        {severity:'info', summary:'Info', detail:'Message Content'},
        {severity:'warn', summary:'Warning', detail:'Message Content'},
        {severity:'error', summary:'Error', detail:'Message Content'}
    ];
  }

  clearMessages() {
    this.msgs2 = [];
  }

  showViaService() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

}
