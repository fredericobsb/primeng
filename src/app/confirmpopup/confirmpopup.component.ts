import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-confirmpopup',
  templateUrl: './confirmpopup.component.html',
  styleUrls: ['./confirmpopup.component.css']
})
export class ConfirmpopupComponent implements OnInit {

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  confirm(event: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Are you sure that you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have accepted"
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "You have rejected"
        });
      }
    });
  }


}
