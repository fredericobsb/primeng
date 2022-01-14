import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { CountryService } from '../floatlabel/countryService';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {

  selectedCities: string[] = [];

  selectedCountries1: string[] = [];

  selectedCountries2: string[] = [];

  items: SelectItem[];

  item!: string;

  cities: any[];

  countries: any[];

  virtualCountries: any;

  selectedCities2: string[] = [];

  selectedCities1: string[] = [];

  constructor(
    private countryService: CountryService,
    private primengConfig: PrimeNGConfig
  ) {
    this.items = [];

    this.countryService.getCountries().then(countries => {
      this.items = countries;
    });

    this.countries = [
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" }
    ];

    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
