import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Product } from './product';
import { ProductServicePickList } from './productservicepicklist';

@Component({
  selector: 'app-picklist',
  templateUrl: './picklist.component.html',
  styleUrls: ['./picklist.component.css']
})
export class PicklistComponent implements OnInit {

  sourceProducts!: Product[];
    
    targetProducts!: Product[];
    
    constructor(private carService: ProductServicePickList, private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.carService.getProductsSmall().then(products => this.sourceProducts = products);
        this.targetProducts = [];
        this.primengConfig.ripple = true;
    }

}
