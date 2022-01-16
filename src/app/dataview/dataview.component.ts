import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from './product';
import { ProductServiceDataView } from './productservicedataview';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css']
})
export class DataviewComponent implements OnInit {

  @ViewChild('dv') dv: Table | undefined;

  products!: Product[];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  sortKey!: string;

  constructor(private productServiceDataView: ProductServiceDataView, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.productServiceDataView.getProducts().then(data => this.products = data);

    this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];

    this.primengConfig.ripple = true;
  }

  onSortChange(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

}
