import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Country } from './country';
import { SelectService } from './selectService';
import { State } from './state';

@Component({
  selector: 'app-cascadeselect',
  templateUrl: './cascadeselect.component.html',
  styleUrls: ['./cascadeselect.component.css']
})
export class CascadeselectComponent  implements OnInit{

  constructor(private route: ActivatedRoute){

  }


ngOnInit() {
  this.getCountries(); 
  console.log('countries => ', this.countries);
  this.route.params.subscribe((params: Params) => {
    console.log(params);    
});
}

  countries: any[] = [];

  selectedCity1: any;

  selectedCity2: any;

 
 
  getCountries(){
    this.countries.push(
      {
        name: "Australia",
        code: "AU",
        states: [
          {
            name: "New South Wales",
            cities: [
              { cname: "Sydney", code: "A-SY" },
              { cname: "Newcastle", code: "A-NE" },
              { cname: "Wollongong", code: "A-WO" }
            ]
          },
          {
            name: "Queensland",
            cities: [
              { cname: "Brisbane", code: "A-BR" },
              { cname: "Townsville", code: "A-TO" }
            ]
          }
        ]
      }
    );

    this.countries.push(
      {
        name: "Canada",
        code: "CA",
        states: [
          {
            name: "Quebec",
            cities: [
              { cname: "Montreal", code: "C-MO" },
              { cname: "Quebec City", code: "C-QU" }
            ]
          },
          {
            name: "Ontario",
            cities: [
              { cname: "Ottawa", code: "C-OT" },
              { cname: "Toronto", code: "C-TO" }
            ]
          }
        ]
      }
      
    );
    this.countries.push(
      {
        name: "United States",
        code: "US",
        states: [
          {
            name: "California",
            cities: [
              { cname: "Los Angeles", code: "US-LA" },
              { cname: "San Diego", code: "US-SD" },
              { cname: "San Francisco", code: "US-SF" }
            ]
          },
          {
            name: "Florida",
            cities: [
              { cname: "Jacksonville", code: "US-JA" },
              { cname: "Miami", code: "US-MI" },
              { cname: "Tampa", code: "US-TA" },
              { cname: "Orlando", code: "US-OR" }
            ]
          },
          {
            name: "Texas",
            cities: [
              { cname: "Austin", code: "US-AU" },
              { cname: "Dallas", code: "US-DA" },
              { cname: "Houston", code: "US-HO" }
            ]
          }
        ]
      }
    );
  }
}
