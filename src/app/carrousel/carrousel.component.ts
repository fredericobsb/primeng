import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductServiceCarrousel } from './productservicecarrousel';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  products!: Product[];
	
	responsiveOptions: any;

  constructor(private productServiceCarrousel: ProductServiceCarrousel) { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

  ngOnInit(): void {
    this.productServiceCarrousel.getProductsSmall().then(products => {
			this.products = products;
		});
  }

}
