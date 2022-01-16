import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from './product';
import { ProductServiceDinamicDialog } from './productservicedinamicdialog';

@Component({
  selector: 'app-productlistdemo',
  templateUrl: './productlistdemo.component.html',
  styleUrls: ['./productlistdemo.component.css']
})
export class ProductlistdemoComponent implements OnInit {

  products!: Product[];
            
    constructor(private productService: ProductServiceDinamicDialog, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    ngOnInit() {
        this.productService.getProductsSmall().then((products: Product[]) => this.products = products);
    }

    selectProduct(product: Product) {
        this.ref.close(product);
    }

}
