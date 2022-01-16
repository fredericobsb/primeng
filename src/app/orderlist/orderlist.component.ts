import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Product } from './product';
import { ProductServiceOrderList } from './productserviceorderlist';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  
  products!: Product[];
  
  constructor(private productServiceOrderList: ProductServiceOrderList, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.productServiceOrderList.getProductsSmall().then(cars => this.products = cars);
    this.primengConfig.ripple = true;
  }

}
