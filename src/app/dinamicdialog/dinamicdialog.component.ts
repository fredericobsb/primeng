import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from './productlistdemo/product';
import { ProductlistdemoComponent } from './productlistdemo/productlistdemo.component';


@Component({
  selector: 'app-dinamicdialog',
  templateUrl: './dinamicdialog.component.html',
  styleUrls: ['./dinamicdialog.component.css']
})
export class DinamicdialogComponent implements OnInit {

  constructor(public dialogService: DialogService, public messageService: MessageService) {}

  ref!: DynamicDialogRef;

  ngOnInit(): void {
  }

  show() {
    this.ref = this.dialogService.open(ProductlistdemoComponent, {
        header: 'Choose a Product',
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000
    });

    this.ref.onClose.subscribe((product: Product) =>{
        if (product) {
            this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.name});
        }
    });
}


}
function ProductListDemo(ProductListDemo: any, arg1: { header: string; width: string; contentStyle: { "max-height": string; overflow: string; }; baseZIndex: number; }): DynamicDialogRef {
  throw new Error('Function not implemented.');
}

